import { Component, OnInit } from '@angular/core';
import { RestService } from './services/restservice';
import { ActivatedRoute, Router } from '@angular/router';
import {Airport} from "./models/airport";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loginForm: FormGroup | undefined;
  socialUser: SocialUser | undefined;
  isLoggedin: boolean | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
  /*title = 'my-app';
  airports: Airport[] | undefined;
  airport: Airport | undefined;

  constructor(private rs : RestService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.rs.getAirports().subscribe((airports) => {this.airports = airports});
    this.rs.postAirport(this.airport);
  }

  onButtonClick() {
    this.rs.postAirport(JSON.stringify(this.airport));
  }
}*/
