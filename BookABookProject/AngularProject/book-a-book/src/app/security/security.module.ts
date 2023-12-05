import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/oauth/token']
      }
    })
  ],
  exports: [LoginComponent],
  providers: [
    JwtHelperService,
  ],
  
})
export class SecurityModule { }

export function tokenGetter(): any {
  return localStorage.getItem('token');
}


