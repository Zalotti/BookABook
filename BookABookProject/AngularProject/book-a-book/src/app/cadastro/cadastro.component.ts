import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
    confirmarSenha: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submitCadastro(): void {
    // Verifique se o formulário é válido antes de enviar para a API
    if (this.cadastroForm.valid) {
      const dadosCadastro = this.cadastroForm.value;

      // Aqui você pode enviar os dados para a API 
      console.log('Dados a serem enviados:', dadosCadastro);

      
      this.cadastroForm.reset();
    }
  }
}
