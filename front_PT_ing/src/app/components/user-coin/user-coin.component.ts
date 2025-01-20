import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userCoinServices/user-coin-services.service'
import { Usuario } from '../../models/usuario/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-coin',
  standalone: false,
  templateUrl: './user-coin.component.html',
  styleUrls: ['./user-coin.component.scss']
})
export class UserCoinComponent implements OnInit {
  users: Usuario[] = [];

  constructor(private UserService: UserService, private router: Router) {}

  goToInicio() {
    this.router.navigate(['/inicio']);
  }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}