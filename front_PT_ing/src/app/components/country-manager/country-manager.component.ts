import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/countryManagerServices/country-manager.service';
import { Pais } from '../../models/pais/pais.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais-gestora',
  standalone: false,
  templateUrl: './country-manager.component.html',
  styleUrls: ['./country-manager.component.scss']
})
export class CountryManagerComponent implements OnInit {
  paises: Pais[] = [];

  constructor(private PaisService: PaisService, private router: Router) {}

  goToInicio() {
    this.router.navigate(['/inicio']);
  }

  ngOnInit(): void {
    this.PaisService.getPaises().subscribe(
      (data) => {
        this.paises = data;
      },
      (error) => {
        console.error('Error fetching paises:', error);
      }
    );
  }
}