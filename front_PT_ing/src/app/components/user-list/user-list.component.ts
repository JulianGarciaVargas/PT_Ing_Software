import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userCoinServices/user-coin-services.service';
import { Usuario } from '../../models/usuario/usuario.model';
import { Router } from '@angular/router';
import { Moneda } from '../../models/moneda/moneda.model';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Usuario[] = [];
  coins: Moneda[] = [];
  selectedUser: Usuario | null = null;
  selectedCoin: Moneda | null = null;
  isModalOpen = false;
  errorMessage: string | null = null;

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

  editUser(user: Usuario): void {
    this.selectedUser = user;
    this.isModalOpen = true;
    this.userService.getAvailableCoins(user.pais.id).subscribe(
      (data) => {
        this.coins = data;
      },
      (error) => {
        console.error('Error fetching coins:', error);
      }
    );
  }

  onClose(): void {
    this.isModalOpen = false;
    this.selectedUser = null;
    this.selectedCoin = null;
    this.errorMessage = null;
  }

  onSave(): void {
    if (this.selectedUser && this.selectedCoin) {
      this.userService.assignCoinToUser(this.selectedUser.id, this.selectedCoin.id).subscribe(
        () => {
          this.isModalOpen = false;
          this.selectedUser = null;
          this.selectedCoin = null;
          this.errorMessage = null;
        },
        (error) => {
          this.errorMessage = 'Error: ' + error.error.message;
        }
      );
    }
  }

  deleteUser(userId: number): void {
    // Lógica para eliminar usuario
  }
}