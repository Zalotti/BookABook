import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });

  msg: any;
  jwtPayload: any;
  constructor(private fb: FormBuilder, private auth: AuthService,) {
    this.jwtPayload = this.auth.jwtPayload;
  }

  login(user: string, password: string) {
    this.auth.login(user, password)
    .then(() => {
      this.msg = 'redirecionar para /reviews';
    })
    .catch(() => {
      this.msg = 'Usuário e/ou senha inválida!';
    });
  }

  ngOnInit(): void {}

  submitLogin(): void {
    // Verifique se o formulário é válido antes de enviar para a API
    if (this.loginForm.valid) {
      const dadosLogin = this.loginForm.value;

      // Aqui você pode enviar os dados para a API 
      console.log('Dados de Login a serem enviados:', dadosLogin);

     
      this.loginForm.reset();
    }
  }
}
