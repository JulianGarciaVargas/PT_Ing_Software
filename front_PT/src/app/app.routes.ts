import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { MyCoinsComponent } from './components/my-coins/my-coins.component';
import { AvailableCoinsComponent } from './components/available-coins/available-coins.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'my-coins', component: MyCoinsComponent },
  { path: 'available-coins', component: AvailableCoinsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }