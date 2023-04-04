import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  user_loggedIn = false;
  title = 'TCGapplication';

  constructor(public loginservice: LoginService){
    this.user_loggedIn = loginservice.user_loggedIn;
  }
}
