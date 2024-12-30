import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlightResultComponent } from './components/flight-result/flight-result.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'flights',
    component: FlightResultComponent,
  },
  { path: 'flightDetails/:id', component: FlightDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
