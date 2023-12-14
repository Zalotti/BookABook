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
import { NgOptimizedImage } from '@angular/common'
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { AuthService } from '../security/auth.service';


import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ReviewsListComponent,
    ReviewRegisterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgOptimizedImage,
    SharedModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports:[
    ReviewsListComponent,
    ReviewRegisterComponent
  ],
  providers: [
    AuthService
  ]
})
export class ReviewsModule { }
