import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CountryCoinComponent } from './components/country-coin/country-coin.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'country-coin', component: CountryCoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
