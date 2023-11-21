import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewFormComponent } from '../review-form/review-form.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent {
  cardRating: number = 3;
  constructor(private dialog: MatDialog) {}

  openReviewForm(): void {
    const dialogRef = this.dialog.open(ReviewFormComponent, {
      width: '600px', // Defina o tamanho do popup conforme necessário
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Formulário fechado', result);
    });
  }

}
