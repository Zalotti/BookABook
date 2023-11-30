import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

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
