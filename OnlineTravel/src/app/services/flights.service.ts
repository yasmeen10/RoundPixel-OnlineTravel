import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private flightsSubject = new BehaviorSubject<any[]>([]);
  allflights = this.flightsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllFlights(): void {
    this.http.get('/assets/response.json').subscribe({
      next: (data: any) => {
        this.flightsSubject.next(data.airItineraries);
        // console.log(this.flightsSubject.getValue());
      },
      error: (error) => console.error('Error fetching flights:', error),
    });
  }

  getFlightBySequenceNumServices(sequenceNum: any) {
    const flight = this.flightsSubject
      .getValue()
      .find((flight) => flight.sequenceNum === Number(sequenceNum));
    return flight;
  }
}
