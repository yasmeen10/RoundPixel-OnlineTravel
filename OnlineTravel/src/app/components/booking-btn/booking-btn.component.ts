import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take, timer } from 'rxjs';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
@Component({
  selector: 'app-booking-btn',
  templateUrl: './booking-btn.component.html',
  styleUrls: ['./booking-btn.component.css'],
})
export class BookingBtnComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  openSuccessPopUp() {
    console.log('hello');
    const dialog = this.dialog.open(PopupComponent, {
      data: { text: 'Added Successfully' },
    });
    timer(2000)
      .pipe(take(1))
      .subscribe(() => {
        dialog.close();
        this.router.navigate(['/flights']);
      });
  }
}
