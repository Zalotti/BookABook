import { Component } from '@angular/core';
import { Review } from '../../core/model';
import { NgForm } from '@angular/forms';
import { ReviewService } from '../review.service';
import { AuthService } from '../../security/auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';






@Component({
  selector: 'app-review-register',
  templateUrl: './review-register.component.html',
  styleUrl: './review-register.component.css'
})

export class ReviewRegisterComponent {
  review = new Review(this.auth.jwtPayload?.user_id);  

  constructor(private reviewService: ReviewService,
    private router: Router,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private title: Title
  ) { }
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
    reviewForm.form.value.rate = this.rating;
    reviewForm.form.value.user = this.auth.jwtPayload?.user;
    reviewForm.form.value.review_date = new Date();
    reviewForm.form.value.review_name = 'teste';
    reviewForm.form.value.observation = 'teste';

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
        this.router.navigate(['/reviews', addedReview.id]);
      })
      .catch(error => this.errorHandler.handle(error));
  }
}


