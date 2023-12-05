import { Component } from '@angular/core';
import { Review } from '../../core/model';
import { NgForm } from '@angular/forms';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-register',
  templateUrl: './review-register.component.html',
  styleUrl: './review-register.component.css'
})

export class ReviewRegisterComponent {
  review = new Review();

  constructor(private reviewService: ReviewService){}

  save(form: NgForm): void {
    this.reviewService.add(this.review)
      .then(() => {
        console.log('Atividade adicionada com sucesso!');
        form.reset();
        this.review = new Review();
      })
      .catch(erro => console.log(erro));
  }
}
