import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {MenubarModule} from "primeng/menubar";
import {ToastModule} from "primeng/toast";
import {RoutesComponent} from "./components/routes/routes.component";
import {AppComponent} from "./app.component";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    ToastModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
