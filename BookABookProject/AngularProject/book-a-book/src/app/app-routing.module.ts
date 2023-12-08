import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
// import { CadastroComponent } from './cadastro/cadastro.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';
import { ReviewRegisterComponent } from './reviews/review-register/review-register.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'cadastro', component: CadastroComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'reviews', component: ReviewsListComponent},
  { path: 'reviews/new', component: ReviewRegisterComponent },
  { path: 'reviews/:id', component: ReviewRegisterComponent },
  { path: 'cadastro', component: ReviewRegisterComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }