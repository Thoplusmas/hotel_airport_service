import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MenubarModule} from "primeng/menubar";
import {ToastModule} from "primeng/toast";
import {AppComponent} from "./app.component";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import {AirportComponent} from "./components/airport/airport.component";
import {AirportDetailComponent} from "./components/airport-detail/airport-detail.component";
import {AirportDetailMapComponent} from "./components/airport-detail-map/airport-detail-map.component";
import {NguiMapModule} from "@ngui/map";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AirportComponent,
    AirportDetailComponent,
    AirportDetailMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    ToastModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NguiMapModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '276213602302-or33p9kgjhneqb2d6rlhp4rk5rr8094m.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
