import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilterState } from 'src/models/filterState';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  // Subjects to hold the flight, airline, price, and filtered flight data
  private flightsSubject = new BehaviorSubject<any[]>([]);
  private airlineSubject = new BehaviorSubject<any[]>([]);
  private minPriceSubject = new BehaviorSubject<number>(0);
  private maxPriceSubject = new BehaviorSubject<number>(0);
  private filteredFlightsSubject = new BehaviorSubject<any[]>([]);

  // Public observables that components can subscribe to
  allflights = this.flightsSubject.asObservable();
  allAirlines = this.airlineSubject.asObservable();
  min = this.minPriceSubject.asObservable();
  max = this.maxPriceSubject.asObservable();
  filteredFlights = this.filteredFlightsSubject.asObservable();

  filteringElements: FilterState = {
    airlineName: '',
    stop: -1,
    refundable: null,
    minPrice: 0,
    maxPrice: 0,
  };

  constructor(private http: HttpClient) {}

  // Fetches all flights and related data from a JSON file
  getAllFlights(): void {
    this.http.get('/assets/response.json').subscribe({
      next: (data: any) => {
        // Update the subjects with the fetched data
        this.flightsSubject.next(data.airItineraries);
        this.airlineSubject.next(data.airlines);
        this.filteredFlightsSubject.next(data.airItineraries);
        this.getPriceRange();
        this.getFilteredFlights();
      },
      error: (error) => console.error('Error fetching flights:', error),
    });
  }

  // Calculates the minimum and maximum price based on the flights data
  getPriceRange() {
    const flights = this.flightsSubject.getValue();

    // Get the prices of all flights
    const prices = flights.map((flight: any) => flight.itinTotalFare.amount);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    this.minPriceSubject.next(minPrice);
    this.maxPriceSubject.next(maxPrice);
    this.filteringElements.minPrice = minPrice;
    this.filteringElements.maxPrice = maxPrice;
  }

  // Finds a flight by its sequence number
  getFlightBySequenceNumServices(sequenceNum: any) {
    const flight = this.flightsSubject
      .getValue()
      .find((flight) => flight.sequenceNum === Number(sequenceNum));
    return flight;
  }

  // Updates the filtering criteria and triggers re-filtering of the flights
  updateFilter(filter: Partial<FilterState>): void {
    this.filteringElements = { ...this.filteringElements, ...filter };
    this.getFilteredFlights();
  }

  // Filters the flights based on the current filter criteria
  private getFilteredFlights(): void {
    const flights = this.flightsSubject.getValue();
    const filteredFlights = flights.filter((flight) => {
      const matchesAirline =
        !this.filteringElements.airlineName ||
        flight.allJourney.flights[0]?.flightAirline?.airlineName
          .toLowerCase()
          .includes(this.filteringElements.airlineName.toLowerCase());

      const matchesStop =
        this.filteringElements.stop === -1 ||
        flight.allJourney.flights[0].stopsNum === this.filteringElements.stop;

      const matchesRefundable =
        this.filteringElements.refundable === null ||
        flight.isRefundable === this.filteringElements.refundable;

      const matchesPrice =
        flight.itinTotalFare.amount >= this.filteringElements.minPrice &&
        flight.itinTotalFare.amount <= this.filteringElements.maxPrice;

      return matchesAirline && matchesStop && matchesRefundable && matchesPrice;
    });

    this.filteredFlightsSubject.next(filteredFlights); // Update the filtered flights subject with the matching flights
  }

  // Initializes all the data by fetching flights and applying filters
  initializeAllData(): void {
    this.getAllFlights();
  }
}
