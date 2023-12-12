import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
// import { CadastroComponent } from './cadastro/cadastro.component';
//import { HomepageComponent } from './homepage/homepage.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';
import { ReviewRegisterComponent } from './reviews/review-register/review-register.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { NotAuthorizedComponent } from './core/not-authorized.component';
import { AuthGuard } from './security/auth.guard';
import { UserRegisterComponent } from './users/user-register/user-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'cadastro', component: CadastroComponent },
  { path: 'users/new', component: UserRegisterComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_REGISTER_USER'] }},
  //{ path: 'homepage', component: HomepageComponent },
  { path: 'reviews', component: ReviewsListComponent, canActivate: [AuthGuard], data:{roles: ['ROLE_SEARCH_REVIEW']} },
  { path: 'reviews/new', component: ReviewRegisterComponent, canActivate: [AuthGuard], data:{roles: ['ROLE_REGISTER_REVIEW']}  },
  { path: 'reviews/:id', component: ReviewRegisterComponent, canActivate: [AuthGuard], data:{roles: ['ROLE_REGISTER_REVIEW']} },
  { path: 'cadastro', component: ReviewRegisterComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '**', redirectTo: 'page-not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }