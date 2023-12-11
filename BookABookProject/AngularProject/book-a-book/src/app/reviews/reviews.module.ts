import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewRegisterComponent } from './review-register/review-register.component';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SecurityModule } from './../security/security.module';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    ReviewsListComponent,
    ReviewRegisterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
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
