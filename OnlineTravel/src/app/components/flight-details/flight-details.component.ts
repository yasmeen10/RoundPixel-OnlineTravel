import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private flightsService: FlightsService
  ) {}
  flight: any;
  ngOnInit(): void {
    const flightId = this.activatedRouter.snapshot.paramMap.get('id');
    this.flightsService.getAllFlights(); // Ensure flights are loaded

    this.flightsService.allflights.subscribe((flights) => {
      if (flights.length > 0) {
        this.flight =
          this.flightsService.getFlightBySequenceNumServices(flightId);
        console.log(this.flight);
      }
    });
  }
  // ngOnInit(): void {
  //   const flightId = this.activatedRouter.snapshot.paramMap.get('id');
  //   this.flightsService.getAllFlights(); // Ensure flights are loaded
  //   this.getFlightBySequenceNum(flightId).subscribe((flight) => {
  //     this.flight = flight;
  //     console.log(this.flight);
  //   });
  // }

  // getFlightBySequenceNum(flightId: any) {
  //   return this.flightsService.allflights.pipe(
  //     map((flights: any) => {
  //       if (flights.length > 0) {
  //         return this.flightsService.getFlightBySequenceNumServices(flightId);
  //       }
  //       return null;
  //     })
  //   );
  // }
}
