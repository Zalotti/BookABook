// review.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  getReviews(): Observable<any[]> {
    // Simula uma chamada à API e retorna dados fictícios
    const fakeReviews = [
      {
        nickname: 'Tutz',
        bookTitle: 'O CAPITAL',
        bookImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgv2-2-f.scribdassets.com%2Fimg%2Fword_document%2F405837172%2Foriginal%2F31b046080b%2F1587780385%3Fv%3D1&f=1&nofb=1&ipt=53cd715c75074f8d91e6234c72eb45273d5627c5a93254c70bd6b9dc99a727c2&ipo=images',
        reviewText: 'Excelente livro!',
      },
      {
        nickname: 'Usuario2',
        bookTitle: 'Livro 2',
        bookImage: 'caminho/para/imagem2.jpg',
        reviewText: 'Recomendo fortemente.',
      },
      {
        nickname: 'Usuario3',
        bookTitle: 'Livro 3',
        bookImage: 'caminho/para/imagem3.jpg',
        reviewText: 'História envolvente, não consegui parar de ler.',
      },
      {
        nickname: 'Usuario4',
        bookTitle: 'Livro 4',
        bookImage: 'caminho/para/imagem4.jpg',
        reviewText: 'Final surpreendente, recomendo para quem gosta de mistério.',
      },
      {
        nickname: 'Usuario5',
        bookTitle: 'Livro 5',
        bookImage: 'caminho/para/imagem5.jpg',
        reviewText: 'Personagens cativantes, me identifiquei com a história.',
      },
      {
        nickname: 'Usuario6',
        bookTitle: 'Livro 6',
        bookImage: 'caminho/para/imagem6.jpg',
        reviewText: 'Leitura leve e divertida, ideal para relaxar.',
      },
      {
        nickname: 'Usuario7',
        bookTitle: 'Livro 7',
        bookImage: 'caminho/para/imagem7.jpg',
        reviewText: 'Suspense do início ao fim, não conseguia parar de virar as páginas.',
      },
      {
        nickname: 'Usuario8',
        bookTitle: 'Livro 8',
        bookImage: 'caminho/para/imagem8.jpg',
        reviewText: 'Ótimo para quem gosta de fantasia, mundo bem construído.',
      },
      {
        nickname: 'Usuario9',
        bookTitle: 'Livro 9',
        bookImage: 'caminho/para/imagem9.jpg',
        reviewText: 'Personagens complexos, história emocionante.',
      },
      {
        nickname: 'Usuario10',
        bookTitle: 'Livro 10',
        bookImage: 'caminho/para/imagem10.jpg',
        reviewText: 'Me surpreendi com a reviravolta, recomendo a todos.',
      },
      {
        nickname: 'Usuario11',
        bookTitle: 'Livro 11',
        bookImage: 'caminho/para/imagem11.jpg',
        reviewText: 'Leitura obrigatória para fãs do gênero.',
      },
      {
        nickname: 'Usuario12',
        bookTitle: 'Livro 12',
        bookImage: 'caminho/para/imagem12.jpg',
        reviewText: 'Envolvente e reflexivo, me fez pensar por dias.',
      },
      {
        nickname: 'Usuario13',
        bookTitle: 'Livro 13',
        bookImage: 'caminho/para/imagem13.jpg',
        reviewText: 'Não esperava gostar tanto, mas me surpreendeu positivamente.',
      },
      {
        nickname: 'Usuario14',
        bookTitle: 'Livro 14',
        bookImage: 'caminho/para/imagem14.jpg',
        reviewText: 'A trama me deixou ansioso para o próximo capítulo.',
      },
      {
        nickname: 'Usuario15',
        bookTitle: 'Livro 15',
        bookImage: 'caminho/para/imagem15.jpg',
        reviewText: 'Interessante do começo ao fim, recomendo para quem busca algo diferente.',
      },
      {
        nickname: 'Usuario16',
        bookTitle: 'Livro 16',
        bookImage: 'caminho/para/imagem16.jpg',
        reviewText: 'Narrativa envolvente, personagens bem desenvolvidos.',
      },
      {
        nickname: 'Usuario17',
        bookTitle: 'Livro 17',
        bookImage: 'caminho/para/imagem17.jpg',
        reviewText: 'Uma jornada emocional, chorei e ri durante a leitura.',
      },
      {
        nickname: 'Usuario18',
        bookTitle: 'Livro 18',
        bookImage: 'caminho/para/imagem18.jpg',
        reviewText: 'Um clássico moderno, não pode faltar na estante.',
      },
      {
        nickname: 'Usuario19',
        bookTitle: 'Livro 19',
        bookImage: 'caminho/para/imagem19.jpg',
        reviewText: 'Suspense eletrizante, recomendo para os fãs do gênero.',
      },
      {
        nickname: 'Usuario20',
        bookTitle: 'Livro 20',
        bookImage: 'caminho/para/imagem20.jpg',
        reviewText: 'Final satisfatório, fechou bem a trama.',
      },
    ];

    return of(fakeReviews);
  }
}
