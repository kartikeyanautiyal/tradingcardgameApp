import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details.model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  current_user: any | null
  private _saveUser = "http://localhost:8090/api/v1/user/register";
  private _getuser = "http://localhost:8090/api/v1/user/login";
  user_loggedIn = false;
  constructor(private http: HttpClient, private router:Router) {
  }

  register(credentials: UserDetails){
    //return this.http.post(this._saveUser, credentials);
    this.http.post(this._saveUser, credentials).subscribe(
      (result) => {
        console.log(result);
      }
    )
  }

  login(credentials:any) {
    return this.http.post(this._getuser, credentials)
      .subscribe((result:any) => {
        if(result && result.token != ""){
          localStorage.setItem("token", result.token);
          this.router.navigate(['home']);
          alert("login Successful");
          this.user_loggedIn = true;
        }
      },
      (error) => {    
        alert("invalid credentials");
        this.router.navigate(["sign-in"]);                        //Error callback
      }
    );
  }

  logout(){
    localStorage.removeItem("token");
    this.user_loggedIn = false;
  }

  isloggedIn(){
    return this.user_loggedIn;
  }
}
