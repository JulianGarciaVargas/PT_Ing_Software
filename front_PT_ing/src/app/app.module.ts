import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CountryCoinComponent } from './components/country-coin/country-coin.component';
import { UserCoinComponent } from './components/user-coin/user-coin.component';
import { CountryManagerComponent } from './components/country-manager/country-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    InicioComponent,
    CountryCoinComponent,
    UserCoinComponent,
    CountryManagerComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
