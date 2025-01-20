import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/usuario'; // URL de tu API

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Usuario[]> {
    const token = localStorage.getItem('jwt'); // Recupera el token JWT del almacenamiento local
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Usuario[]>(this.apiUrl, { headers });
  }
}