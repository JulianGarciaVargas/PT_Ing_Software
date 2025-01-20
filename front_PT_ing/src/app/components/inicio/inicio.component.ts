import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: false,
  
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  constructor(private router: Router) {}

  goToUserList() {
    this.router.navigate(['/user-list']);
  } 

  goToCountryCoin() {
    this.router.navigate(['/country-coin']);
  }

  goToUserCoin() {
    this.router.navigate(['/user-coin']);
  }

  goToCountryManager() {
    this.router.navigate(['/country-manager']);
  }
}

