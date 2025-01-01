import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private flightsService: FlightsService) {}
  ngOnInit(): void {
    this.flightsService.initializeAllData(); // Ensure data is fetched once when app initializes
  }
}
