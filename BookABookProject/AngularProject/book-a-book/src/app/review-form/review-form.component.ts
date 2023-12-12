// // review-form.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-review-form',
//   templateUrl: './review-form.component.html',
//   styleUrls: ['./review-form.component.css'],
// })

// export class ReviewFormComponent {
//   titulo: string = '';
//   review: string = '';
//   capaLivro: string = '';
//   categoriaSelecionada: string = ''; 


//   //categorias de livros
 
//   //contador de estrelas selecionadas
//   rating: number = 1;
//   rateBook(starIndex: number): void {
//     this.rating = starIndex;
//   }

//   submitReview(): void {
//     // Lógica para enviar a revisão para o backend
//     const reviewData = {
//       titulo: this.titulo,
//       review: this.review,
//       capaLivro: this.capaLivro,
//       categoria: this.categoriaSelecionada,
//       rating: this.rating,
//     };

//     console.log('Revisão enviada:', reviewData);

    
//     this.resetForm();
//   }

//   resetForm(): void {
//     // Limpar os campos do formulário após o envio
//     this.titulo = '';
//     this.review = '';
//     this.capaLivro = '';
//     this.categoriaSelecionada = '';
//     this.rating = 1;
//   }
// }
