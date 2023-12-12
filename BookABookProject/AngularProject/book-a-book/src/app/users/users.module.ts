import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({

  declarations: [UserRegisterComponent],
  
  imports: [
    CommonModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    UserRegisterComponent
  ]
  
})
export class UsersModule { }
