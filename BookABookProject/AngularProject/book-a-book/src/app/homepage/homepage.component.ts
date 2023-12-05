import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { ReviewService } from '../reviews/review.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  p: number = 1;
  reviews: any[] = []; // Array para armazenar todas as reviews
  pagedReviews: any[] = []; // Array para armazenar as reviews de uma página específica
  itemsPerPage: number = 5; // Número de items por página

  constructor(private dialog: MatDialog, private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  openReviewForm(): void {
    const dialogRef = this.dialog.open(ReviewFormComponent, {
      width: '800px', // Tamanho do popup do formulário
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Formulário fechado', result);
      // Atualize as reviews após adicionar uma nova, se necessário
      if (result) {
        this.loadReviews();
      }
    });
  }

  loadReviews(): void {
    this.reviewService.getReviews().subscribe(
      (data: any) => {
        this.reviews = data; // Supondo que a API retorna um array de reviews
        this.updatePagedReviews();
      },
      (error: any) => { // Explicitando o tipo do parâmetro error
        console.error('Erro ao carregar os reviews:', error);
      }
    );
  }

  updatePagedReviews(): void {
    const startIndex = (this.p - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedReviews = this.reviews.slice(startIndex, endIndex);
  }

 
}
