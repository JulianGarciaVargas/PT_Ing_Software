// filepath: /c:/Users/jojgarci/Downloads/PT Ing Software (Nivel 1)/PT_Ing_Software/front_PT/src/app/app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AvailableCoinsComponent } from './components/available-coins/available-coins.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    FormsModule,
    AvailableCoinsComponent
  ],
  providers: [],
})
export class AppModule { }