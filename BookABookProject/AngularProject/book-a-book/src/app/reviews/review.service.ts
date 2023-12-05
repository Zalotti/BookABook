// review.service.ts

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from '../security/auth.service';
import { Review } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {

  reviewsUrl = 'http://localhost:8080/reviews';
  email: any;

  constructor(private http: HttpClient, private auth: AuthService) { }

  listByUser(): Promise<any> {
    this.email = this.auth.jwtPayload?.user_name;
    return this.http.get(`${this.reviewsUrl}/user/${this.email}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
  // lista todas do banco
  list(): Promise<any> {
    return this.http.get(`${this.reviewsUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  add(review: Review): Promise<Review> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.reviewsUrl, Review.toJson(review), { headers })
      .toPromise();
  }

  getReviews(): Observable<any[]> {
    // Simula uma chamada à API e retorna dados fictícios
    const fakeReviews = [
      {
        nickname: 'Tutz',
        bookTitle: 'O CAPITAL',
        bookImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgv2-2-f.scribdassets.com%2Fimg%2Fword_document%2F405837172%2Foriginal%2F31b046080b%2F1587780385%3Fv%3D1&f=1&nofb=1&ipt=53cd715c75074f8d91e6234c72eb45273d5627c5a93254c70bd6b9dc99a727c2&ipo=images',
        reviewText: '"O Capital," escrito por Karl Marx, é uma obra monumental que continua a desafiar e inspirar leitores desde sua publicação no século XIX. Marx, um filósofo, economista e sociólogo alemão, empreende uma análise crítica profunda do sistema capitalista, delineando suas estruturas, contradições e consequências. Esta obra seminal é uma exploração ambiciosa e abrangente dos mecanismos subjacentes ao capitalismo, e sua relevância perdura ao longo do tempo. Uma das características mais marcantes do livro é a meticulosa análise das relações sociais e econômicas que permeiam a produção e distribuição de mercadorias. Marx desvenda a alienação do trabalhador no processo de produção, destacando a exploração inerente do trabalho assalariado. Sua teoria da mais-valia é um componente essencial, revelando como o capital acumula riqueza à custa do trabalho humano. Além disso, "O Capital" explora as crises cíclicas do capitalismo, demonstrando como a busca incessante por lucro leva a contradições internas e a períodos de instabilidade econômica. Marx antecipa preocupações contemporâneas, como desigualdade, concentração de riqueza e alienação, oferecendo uma lente crítica que ressoa em discussões econômicas modernas.',
        genre: 'não ficção',
      },
      {
        nickname: 'BiblioMan',
        bookTitle: 'Cem Anos de Solidão',
        bookImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F8%2F8a%2FOneHundredYearsOfSolitude%2Bcover.jpg&f=1&nofb=1',
        reviewText: '"Cem Anos de Solidão", escrito por Gabriel García Márquez, é uma obra-prima do realismo mágico que transporta os leitores para o fictício e encantador mundo de Macondo. A narrativa épica se desenrola ao longo de várias gerações da família Buendía, mergulhando nas complexidades da vida, amor, poder e decadência. Márquez tece uma teia de eventos surreais e personagens inesquecíveis, explorando temas como a solidão, a memória e o inevitável ciclo da história. A prosa poética e envolvente do autor colombiano cativa os leitores, proporcionando uma experiência literária única que transcende fronteiras culturais e temporais. "Cem Anos de Solidão" é uma jornada emocionante que desafia as convenções narrativas tradicionais, deixando uma marca indelével na literatura mundial.',
        genre: 'ficção mágica',
      },
      {
        nickname: 'HistóricoExplorador',
        bookTitle: 'Sapiens: Uma Breve História da Humanidade',
        bookImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F8%2F86%2FSapiens%2Byuval%2Bnoah%2Bharari%2Bbook%2Bcover.jpg&f=1&nofb=1',
        reviewText: '"Sapiens: Uma Breve História da Humanidade", escrito por Yuval Noah Harari, é uma jornada fascinante que nos leva desde os primórdios da espécie humana até os desafios contemporâneos. Harari explora as grandes revoluções que moldaram a trajetória da humanidade, desde a Revolução Cognitiva até as revoluções agrícola e industrial. Com uma abordagem acessível e perspicaz, o autor examina como mitos, instituições e ideias colaboraram para criar as sociedades complexas de hoje. Sua análise abrange questões como a formação de impérios, o surgimento de religiões e as transformações tecnológicas. "Sapiens" oferece uma perspectiva única sobre a condição humana, convidando os leitores a refletirem sobre o passado para compreenderem melhor o presente e o futuro.',
        genre: 'não ficção histórica',
      },
      
      {
        nickname: 'Usuario1',
        bookTitle: 'Livro 1',
        bookImage: 'caminho/para/imagem1.jpg',
        reviewText: 'Excelente livro!',
        genre: 'Ficção',
      },
      {
        nickname: 'Usuario2',
        bookTitle: 'Livro 2',
        bookImage: 'caminho/para/imagem2.jpg',
        reviewText: 'Recomendo fortemente.',
        genre: 'Romance',
      },
      {
        nickname: 'BiblioMan',
        bookTitle: 'Cem Anos de Solidão',
        bookImage: '',
        reviewText: '"Cem Anos de Solidão", escrito por Gabriel García Márquez, é uma obra-prima do realismo mágico que transporta os leitores para o fictício e encantador mundo de Macondo. A narrativa épica se desenrola ao longo de várias gerações da família Buendía, mergulhando nas complexidades da vida, amor, poder e decadência. Márquez tece uma teia de eventos surreais e personagens inesquecíveis, explorando temas como a solidão, a memória e o inevitável ciclo da história. A prosa poética e envolvente do autor colombiano cativa os leitores, proporcionando uma experiência literária única que transcende fronteiras culturais e temporais. "Cem Anos de Solidão" é uma jornada emocionante que desafia as convenções narrativas tradicionais, deixando uma marca indelével na literatura mundial.',
        genre: 'ficção mágica',
      },
      {
        nickname: 'HistóricoExplorador',
        bookTitle: 'Sapiens: Uma Breve História da Humanidade',
        bookImage: 'https://www.lpm.com.br/livros/imagens/sapiens_capa_dura_9788525434593_hd.jpg',
        reviewText: '"Sapiens: Uma Breve História da Humanidade", escrito por Yuval Noah Harari, é uma jornada fascinante que nos leva desde os primórdios da espécie humana até os desafios contemporâneos. Harari explora as grandes revoluções que moldaram a trajetória da humanidade, desde a Revolução Cognitiva até as revoluções agrícola e industrial. Com uma abordagem acessível e perspicaz, o autor examina como mitos, instituições e ideias colaboraram para criar as sociedades complexas de hoje. Sua análise abrange questões como a formação de impérios, o surgimento de religiões e as transformações tecnológicas. "Sapiens" oferece uma perspectiva única sobre a condição humana, convidando os leitores a refletirem sobre o passado para compreenderem melhor o presente e o futuro.',
        genre: 'não ficção histórica',
      },
      
    ];

    return of(fakeReviews);
  }
}
