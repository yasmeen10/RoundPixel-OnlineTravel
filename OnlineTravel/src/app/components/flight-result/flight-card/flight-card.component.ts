import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent implements OnInit {
  @Input() flight: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    // console.log(this.flight);
  }
  goToFlightDetails(id: any) {
    console.log(id);
    this.router.navigate(['/flightDetails', id]);
  }
}
