import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario/usuario.model';
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
}