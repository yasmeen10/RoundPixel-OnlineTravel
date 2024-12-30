import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.css'],
})
export class FlightResultComponent implements OnInit {
  constructor(private flightsService: FlightsService) {}
  allFlights: any = [];
  ngOnInit(): void {
    this.getFlights();
  }

  getFlights() {
    this.flightsService.getAllFlights();

    // Subscribe to the observable to get real-time updates
    this.flightsService.allflights.subscribe((flights) => {
      this.allFlights = flights;
    });
  }
}
