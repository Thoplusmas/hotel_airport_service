import { Component } from '@angular/core';
import { RestService } from './services/restservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'my-app';

  //constructor(private rs : RestService){}

}
