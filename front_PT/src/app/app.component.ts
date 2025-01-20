import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCoinsComponent } from './components/my-coins/my-coins.component';
import { AvailableCoinsComponent } from './components/available-coins/available-coins.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCoinsComponent, AvailableCoinsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front_PT';
}
