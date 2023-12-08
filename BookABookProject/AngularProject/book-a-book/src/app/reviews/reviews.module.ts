import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewRegisterComponent } from './review-register/review-register.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



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
    SharedModule,
    RouterModule
  ],
  exports:[
    ReviewsListComponent,
    ReviewRegisterComponent
  ]
})
export class ReviewsModule { }
