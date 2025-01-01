import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.css'],
})
export class FlightResultComponent implements OnInit, OnDestroy {
  constructor(private flightsService: FlightsService) {}

  private subscription: Subscription = new Subscription();

  allFlights: any = [];

  ngOnInit(): void {
    this.getFlights();
  }

  getFlights() {
    // this.flightsService.getAllFlights();
    // Subscribe to the observable to get real-time updates
    this.subscription.add(
      this.flightsService.filteredFlights.subscribe((flights) => {
        this.allFlights = flights;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
