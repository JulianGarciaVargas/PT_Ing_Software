// filepath: /c:/Users/jojgarci/Downloads/PT Ing Software (Nivel 1)/PT_Ing_Software/front_PT/src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }

    if (this.username !== 'pedro' || this.password !== 'pedro33') {
      this.errorMessage = 'Nombre de usuario o contraseña incorrectos';
      return;
    }

    // Si las credenciales son correctas, redirigir a 'available-coins'
    this.router.navigate(['/available-coins']);
  }
}