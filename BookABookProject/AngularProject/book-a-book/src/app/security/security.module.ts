import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookabookHttpInterceptor } from './bookabook-http-interceptor';
import { AuthGuard } from './auth.guard';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/oauth/token', 'http://localhost:8080/users']
      }
    })
  ],
  exports: [LoginComponent],
  providers: [
    JwtHelperService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BookabookHttpInterceptor,
      multi: true
    },
  ],
  
})
export class SecurityModule { }

export function tokenGetter(): any {
  return localStorage.getItem('token');
}


