import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario/usuario.model';
import { Moneda } from '../../models/moneda/moneda.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/usuario'; // URL de tu API

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  getUsers(): Observable<Usuario[]> {
    const token = this.authService.getToken(); // Recupera el token JWT del servicio de autenticación
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Usuario[]>(this.apiUrl, { headers });
  }

  getAvailableCoins(paisId: number): Observable<Moneda[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Moneda[]>(`http://localhost:8080/api/pais/${paisId}/monedas`, { headers });
  }

  assignCoinToUser(userId: number, coinId: number): Observable<void> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<void>(`${this.apiUrl}/${userId}/monedas`, { coinId }, { headers });
  }
}