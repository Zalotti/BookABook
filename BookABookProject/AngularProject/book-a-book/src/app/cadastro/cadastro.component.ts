import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { User } from '../core/model';

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

  user = new User();

  constructor(
    private userService: UserService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private router: Router,
    private title: Title,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.title.setTitle('Cadastro de Usuário');
  }

  submitCadastro(userForm: NgForm): void {
    // // Verifique se o formulário é válido antes de enviar para a API
    // if (this.cadastroForm.valid) {
    //   const dadosCadastro = this.cadastroForm.value;

    //   // Aqui você pode enviar os dados para a API 
    //   console.log('Dados a serem enviados:', dadosCadastro);

      
    //   this.cadastroForm.reset();
    // }

    this.userService.add(this.user)
    .then(() => {
      this.messageService.add({ severity: 'success', detail: 'Usuário cadastrado com sucesso.' });
      this.router.navigate(['/login']);
    })
    .catch(error => this.errorHandler.handle(error));
  }
}
