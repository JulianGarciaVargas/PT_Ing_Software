import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AvailableCoinsComponent } from './components/available-coins/available-coins.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AppRouting } from './app.routes';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AppComponent,
    AvailableCoinsComponent,
 
    InicioComponent,
    UserListComponent,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouting
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: []
})
export class AppModule { }