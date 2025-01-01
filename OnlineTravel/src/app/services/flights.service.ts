import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilterState } from 'src/models/filterState';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private flightsSubject = new BehaviorSubject<any[]>([]);
  private airlineSubject = new BehaviorSubject<any[]>([]);
  private minPriceSubject = new BehaviorSubject<number>(0);
  private maxPriceSubject = new BehaviorSubject<number>(0);
  private filteredFlightsSubject = new BehaviorSubject<any[]>([]);

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

  getAllFlights(): void {
    this.http.get('/assets/response.json').subscribe({
      next: (data: any) => {
        this.flightsSubject.next(data.airItineraries);
        this.airlineSubject.next(data.airlines);
        this.filteredFlightsSubject.next(data.airItineraries);
        this.getPriceRange(); // Move this here
        this.getFilteredFlights();
      },
      error: (error) => console.error('Error fetching flights:', error),
    });
  }

  getPriceRange() {
    const flights = this.flightsSubject.getValue();
    if (flights.length > 0) {
      const prices = flights.map((flight: any) => flight.itinTotalFare.amount);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      this.minPriceSubject.next(minPrice);
      this.maxPriceSubject.next(maxPrice);
      this.filteringElements.minPrice = minPrice;
      this.filteringElements.maxPrice = maxPrice;
    } else {
      console.error('No flights data available to calculate price range.');
    }
  }

  getFlightBySequenceNumServices(sequenceNum: any) {
    const flight = this.flightsSubject
      .getValue()
      .find((flight) => flight.sequenceNum === Number(sequenceNum));
    return flight;
  }

  updateFilter(filter: Partial<FilterState>): void {
    this.filteringElements = { ...this.filteringElements, ...filter };
    this.getFilteredFlights();
  }

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

    this.filteredFlightsSubject.next(filteredFlights);
  }

  initializeAllData(): void {
    this.getAllFlights();
  }
}
