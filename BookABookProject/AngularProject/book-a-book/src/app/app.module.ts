import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';



import { ReviewService } from './reviewService'; // remover depois
import { SecurityModule } from './security/security.module';
import { AuthService } from './security/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
   // LoginComponent,
    CadastroComponent,
    HomepageComponent,
    ReviewFormComponent,

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    SecurityModule,
  ],

  providers: [
    ReviewService,
    AuthService], // ReviewService na lista de providers, remover depois
  bootstrap: [AppComponent]

})
export class AppModule { }
