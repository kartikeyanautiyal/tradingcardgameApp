import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details.model';
import { ResponseToken } from '../models/response-token.model';
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";
import { Observable, map } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  current_user: any | null
  private _saveUser = "http://localhost:8090/api/v1/user/register";
  private _getuser = "http://localhost:8090/api/v1/user/login";
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
        }

        else{
          console.log("invalid login");
          //localStorage.setItem("token", "");
          this.router.navigate(["sign-in"]);
        }
      });
  }

   isLoggedIn() { 
      return false;
  }
}
