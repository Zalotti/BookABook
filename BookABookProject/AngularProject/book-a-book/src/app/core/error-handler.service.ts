import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { NotAuthenticatedError } from '../security/bookabook-http-interceptor';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  handle(errorResponse: any): void {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login']);

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if (errorResponse instanceof HttpErrorResponse
      && errorResponse.status >= 400 && errorResponse.status <= 499) {
      msg = 'Erro na solicitação';

      if (errorResponse.status === 403) {
        msg = 'Lhe falta permissões';
      }
      
      if (errorResponse.status === 404) {
        msg = 'Essa página não existe';
      }

      try {
        msg = errorResponse.error[0].userMessage;
      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse);

    } else {
      msg = 'Tente novamente mais tarde';
      console.error('Erro: ', errorResponse);
    }

    this.messageService.add({ severity: 'error', detail: msg });
  }

}}