import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SecurityModule } from './security/security.module';
import { AuthService } from './security/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReviewsModule } from './reviews/reviews.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReviewsModule,
    SecurityModule,
    CoreModule,
    UsersModule
  ],

  providers: [
    AuthService
  ], // ReviewService na lista de providers, remover depois
  bootstrap: [AppComponent]

})
export class AppModule { }
