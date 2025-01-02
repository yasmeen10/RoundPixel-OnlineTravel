import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';
import { FilterState } from 'src/models/filterState';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FilterComponent implements OnInit {
  allAirlines: any[] = [];
  filteredAirlines: any[] = [];
  searchInput: string = '';
  stopOptions = ['ALL', 'DIRECT', 'ONESTOP'];
  refundableOptions = ['ALL', 'REFUNDABLE', 'NON-REFUNDABLE'];
  stopSelectedOption: string = 'All';
  refundableSelectedOption: string = 'All';
  minPrice: number = 0;
  maxPrice: number = 0;
  filters: FilterState = {
    airlineName: '',
    stop: -1, // Default to 'All'
    refundable: null,
    minPrice: 0,
    maxPrice: 0,
  };
  isSidebarOpen: boolean = false;

  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    this.getAllAirlines();
    this.flightsService.getPriceRange(); // Ensure the price range is fetched when component loads

    // Subscribe to the price range updates from FlightsService
    this.flightsService.min.subscribe((min) => {
      this.minPrice = min;
      this.filters.minPrice = min;
    });

    this.flightsService.max.subscribe((max) => {
      this.maxPrice = max;
      this.filters.maxPrice = max;
    });

    // Subscribe to filtered flights to observe any changes
    this.flightsService.filteredFlights.subscribe((flights) => {});
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  getAllAirlines() {
    this.flightsService.allAirlines.subscribe((airlines) => {
      this.allAirlines = airlines;
      this.filteredAirlines = airlines;
    });
  }

  onSelectionChange(event: any) {
    const selectedAirline = event.option.value;
    this.filters.airlineName = selectedAirline.toLowerCase();
    this.flightsService.updateFilter({ airlineName: this.filters.airlineName });
  }

  onSearchInputChange() {
    // Update the filter state based on the search input
    this.filters.airlineName = this.searchInput.trim().toLowerCase();

    // Dynamically filter the airlines based on the search input
    this.filteredAirlines = this.allAirlines.filter((airline) =>
      airline.toLowerCase().includes(this.filters.airlineName)
    );
  }

  onStopChange() {
    const stop =
      this.stopSelectedOption === 'All'
        ? -1
        : this.stopSelectedOption === 'Direct'
        ? 0
        : 1;
    this.flightsService.updateFilter({ stop });
  }

  onRefundableChange() {
    const refundable =
      this.refundableSelectedOption === 'All'
        ? null
        : this.refundableSelectedOption === 'Refundable';
    this.flightsService.updateFilter({ refundable });
  }

  onPriceChange() {
    this.filters.minPrice = this.minPrice;
    this.filters.maxPrice = this.maxPrice;
    this.flightsService.updateFilter({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
    });
  }
}
