// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// import { MessageService } from 'primeng/api';

// import { User } from '../core/model';
// import { UserService } from '../users/user.service';
// import { ErrorHandlerService } from '../core/error-handler.service';
// import { Title } from '@angular/platform-browser';

// @Component({
//   selector: 'app-cadastro',
//   templateUrl: './cadastro.component.html',
//   styleUrls: ['./cadastro.component.css'],
// })

// export class CadastroComponent implements OnInit {
//   cadastroForm: FormGroup = this.fb.group({
//     nome: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]],
//     senha: ['', Validators.required],
//     confirmarSenha: ['', Validators.required],
//   });

//   user = new User();

//   constructor(
//     private userService: UserService,
//     private errorHandler: ErrorHandlerService,
//     private messageService: MessageService,
//     private router: Router,
//     private title: Title,
//     private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.title.setTitle('Cadastro de Usuário');
//   }

//   submitCadastro(userForm: NgForm): void {
//     this.userService.add(this.user)
//       .then(() => {
//         this.messageService.add({ severity: 'success', detail: 'Usuário criado.' });
//         this.router.navigate(['/login']);
//       })
//       .catch(error => this.errorHandler.handle(error));
//   }
// }
