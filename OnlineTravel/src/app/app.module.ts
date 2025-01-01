import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlightResultComponent } from './components/flight-result/flight-result.component';
import { SelectedFlightComponent } from './bonus/selected-flight/selected-flight.component';
import { FilterComponent } from './components/flight-result/filter/filter.component';
import { FlightCardComponent } from './components/flight-result/flight-card/flight-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { matSelectAnimations, MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TimeConverterPipe } from './pipes/time-converter.pipe';
import { DateFormaterPipe } from './pipes/date-formater.pipe';
import { PopupComponent } from './shared/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BookingBtnComponent } from './components/booking-btn/booking-btn.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { PreventArabicDirective } from './directives/prevent-arabic.directive';
import { CurrencyConverterPipe } from './pipes/currency-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightResultComponent,
    SelectedFlightComponent,
    FilterComponent,
    FlightCardComponent,
    FlightDetailsComponent,
    TimeConverterPipe,
    DateFormaterPipe,
    PopupComponent,
    BookingBtnComponent,
    WelcomePageComponent,
    PreventArabicDirective,
    CurrencyConverterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDialogModule,
  ],
  exports: [MatRadioModule, MatSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
