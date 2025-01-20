import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service.ts.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(response => {
      this.authService.saveToken(response.jwt);
    });
  }
}