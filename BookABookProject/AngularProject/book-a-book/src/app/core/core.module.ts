import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../security/auth.service';
import { ReviewService } from '../reviews/review.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    ReviewService
  ],
  exports:[
    NavbarComponent
  ],
})
export class CoreModule { }
