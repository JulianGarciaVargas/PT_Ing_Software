import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userServices/user.service';
import { Usuario } from '../../models/usuario/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Usuario[] = [];
  constructor(private userService: UserService, private router: Router) {}


  goToInicio() {
    this.router.navigate(['/inicio']);
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  editUser(userId: number): void {
    // Lógica para editar usuario
  }

  deleteUser(userId: number): void {
    // Lógica para eliminar usuario
  }
}