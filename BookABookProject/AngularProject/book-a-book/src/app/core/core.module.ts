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
registerLocaleData(localePt);
@NgModule({
  declarations: [
    NavbarComponent
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
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  exports:[
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
})
export class CoreModule { }
