import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:any
  token:string | null = localStorage.getItem("token");
  status: boolean = false;
  constructor(public loginservice: LoginService) {
  }

  ngOnInit(): void {
    //console.log(this.loginservice.current_user);
    let jwt = new JwtHelperService();

    if(this.token){
      this.status = true;
      this.username = jwt.decodeToken(this.token);
    }
    
    else{
      this.status = false;
    }
  }

}
