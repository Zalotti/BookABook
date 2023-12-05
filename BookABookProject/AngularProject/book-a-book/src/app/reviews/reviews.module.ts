import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewRegisterComponent } from './review-register/review-register.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ReviewsListComponent,
    ReviewRegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports:[
    ReviewsListComponent
  ]
})
export class ReviewsModule { }
