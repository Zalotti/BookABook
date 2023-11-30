// review-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
})
export class ReviewFormComponent {
  titulo: string = ''; 
  review: string = '';
  capaLivro: string = ''; // Adicionando a propriedade capaLivro

  onFileSelected(event: any): void {
    // Lógica para lidar com a seleção de arquivo, se necessário
  }

  submitReview(): void {
    // Lógica para enviar a revisão para o backend
    // Certifique-se de incluir this.titulo, this.review e this.capaLivro na requisição
    console.log('Revisão enviada:', this.titulo, this.review, this.capaLivro);
  }
}
