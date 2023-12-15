import { Component, Inject } from '@angular/core';
import { Review } from '../../core/model';
import { NgForm } from '@angular/forms';
import { ReviewService } from '../review.service';
import { AuthService } from '../../security/auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';





@Component({
  selector: 'app-review-register',
  templateUrl: './review-register.component.html',
  styleUrl: './review-register.component.css'
})

export class ReviewRegisterComponent {
  review = new Review(this.auth.jwtPayload?.user_id);  
 // private aux: Review;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: { auxReview: Review },
    private reviewService: ReviewService,
    private router: Router,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private title: Title,
    

  ) {
  //  this.aux = data.auxReview;
  }
  //Arthur 
  selectedCategory: string = ''; // ou o tipo apropriado para sua categoria
  categories = ['Fantasia', 'Ficção', 'Horror', 'Suspense', 'Literatura Infantil', 'Acadêmico', 'Biografia', 'Romance', 'HQ', 'Literatura Nacional'];


  //contador de estrelas selecionadas
  rating: number = 0;

  rateBook(rating: number): void {
    this.rating = rating;
  }


  ngOnInit(): void {
    const id = this.route.snapshot.params[`id`];
    if (id != 'new') {
      this.loadReview(id);
    }
    this.title.setTitle('Postar Nova Review');// aqui!
  }

  new(reviewForm: NgForm) {
    this.review = new Review(this.auth.jwtPayload?.user_id);
    reviewForm.reset();
    this.router.navigate(['/reviews/new']);
  }

  get editing(): boolean {
    return Boolean(this.review.id);
  }

  loadReview(id: number) {
    this.reviewService.findById(id)
      .then(review => {
        this.review = review;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  save(reviewForm: NgForm) {
    //edit
    this.review.rate = this.rating;
//    reviewForm.form.value.user = this.auth.jwtPayload?.user;
    this.review.review_date = new Date();
    
    switch(this.review.category) {
      case "Fantasia":
        this.review.category = 'FANTASIA';
        break;
      case "Ficção":
        this.review.category = 'FICCAO';
        break;
      case "Horror":
        this.review.category = 'HORROR';
        break;
      case "Suspense":
        this.review.category = 'SUSPENSE';
        break;
      case "Literatura Infantil":
        this.review.category = 'INFANTIL';
        break;
      case "Acadêmico":
        this.review.category = 'ACADEMICO';
        break;
      case "Biografia":
        this.review.category = 'BIOGRAFICO';
        break;
      case "Romance":
        this.review.category = 'ROMANCE';
        break;
      case "HQ":
        this.review.category = 'HQ';
        break;
      case "Literatura Nacional":
        this.review.category = 'NACIONAL';
        break;
      case "Outros":
        this.review.category = 'OUTROS';
        break;
      default:
        this.review.category = 'OUTROS';
    }

    console.log(reviewForm.form.value)
    if (this.editing) {
      this.updateReview(reviewForm);
    } else {
      this.addReview(reviewForm);
    }
  }

  updateReview(reviewForm: NgForm) {
    this.reviewService.update(this.review)
      .then(review => {
        this.messageService.add({ severity: 'success', detail: 'Review editada.' });
        this.review = review;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  addReview(reviewForm: NgForm) {
    this.reviewService.add(this.review)
      .then(addedReview => {
        this.messageService.add({ severity: 'success', detail: 'Review adicionada.' });
        this.loadReview(addedReview.id);
        location.reload();
      })
      .catch(error => this.errorHandler.handle(error));
  }

  logout(): void {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}


