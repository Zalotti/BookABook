import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }

  handle(errorResponse: any): void {
    let msg: string;

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

}