import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userServices/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  editUser(userId: number): void {
    // Lógica para editar usuario
  }

  deleteUser(userId: number): void {
    // Lógica para eliminar usuario
  }
}