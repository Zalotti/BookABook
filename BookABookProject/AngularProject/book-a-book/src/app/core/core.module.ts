import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import localePt from '@angular/common/locales/pt';

import { AuthService } from '../security/auth.service';
import { ReviewService } from '../reviews/review.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { Title } from '@angular/platform-browser';
import { NotAuthorizedComponent } from './not-authorized.component';


registerLocaleData(localePt);
@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    NotAuthorizedComponent
  ],
  imports: [

    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule
  ],
  providers: [
    AuthService,
    ReviewService,
    MessageService,
    ConfirmationService,
    ErrorHandlerService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  exports:[
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
})
export class CoreModule { }
