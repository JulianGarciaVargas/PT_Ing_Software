import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AvailableCoinsComponent } from './components/available-coins/available-coins.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'available-coins', component: AvailableCoinsComponent }
];