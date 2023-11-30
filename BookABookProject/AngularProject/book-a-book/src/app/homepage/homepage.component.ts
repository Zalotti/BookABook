import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { ReviewService } from '../reviewService'; // remover caminho e importar o serviço

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  cardRating: number = 5;
  reviews: any[] = []; // Adicionando um array para armazenar as reviews

  constructor(private dialog: MatDialog, private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  openReviewForm(): void {
    const dialogRef = this.dialog.open(ReviewFormComponent, {
      width: '600px', // Defina o tamanho do popup conforme necessário
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Formulário fechado', result);
      // Atualize as reviews após adicionar uma nova, se necessário
      if (result) {
        this.loadReviews();
      }
    });
  }

  loadReviews() {
  this.reviewService.getReviews().subscribe(
    (data: any) => {
      this.reviews = data; // Supondo que a API retorna um array de reviews
    },
    (error: any) => { // Explicitando o tipo do parâmetro error
      console.error('Erro ao carregar os reviews:', error);
    }
  );
}
}
