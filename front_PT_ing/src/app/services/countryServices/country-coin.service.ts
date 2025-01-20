import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../../models/pais/pais.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'http://localhost:8080/api/pais'; // URL de tu API

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  getPaises(): Observable<Pais[]> {
    const token = this.authService.getToken(); // Recupera el token JWT del servicio de autenticación
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Pais[]>(this.apiUrl, { headers });
  }
}