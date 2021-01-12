import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSignupUrl = "http://localhost/api/user/signup";
  constructor(private http: HttpClient) { }


  signup(user : User){
    return this.http.post(this.userSignupUrl, user)
  }

}
