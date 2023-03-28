import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/user-details.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user_logged_in: object | undefined;
  invalidlogin: any | boolean;
  constructor(private router: Router, public loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.loginService.login(data);
  }
}
