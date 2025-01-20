import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/countryServices/country-coin.service';
import { Pais } from '../../models/pais/pais.model';
import { Router } from '@angular/router';

@Component({
  selector: 'country-coin',
  standalone: false,
  templateUrl: './country-coin.component.html',
  styleUrls: ['./country-coin.component.scss']
})
export class CountryCoinComponent implements OnInit {
  paises: Pais[] = [];

  constructor(private paisService: PaisService, private router: Router) {}

  goToInicio() {
    this.router.navigate(['/inicio']);
  }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(
      (data) => {
        this.paises = data;
      },
      (error) => {
        console.error('Error fetching paises:', error);
      }
    );
  }
}