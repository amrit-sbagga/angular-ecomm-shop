import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService : UserService) { }

  error
  success

  ngOnInit(): void {
  }

  signup(event : Event){
    event.preventDefault();
    console.log(event.target);
    let form = <HTMLFormElement>event.target;
    let name = (<HTMLInputElement>form.elements.namedItem("name")).value;
    let email = (<HTMLInputElement>form.elements.namedItem("email")).value;
    let password = (<HTMLInputElement>form.elements.namedItem("password")).value;
    let phoneStr = (<HTMLInputElement>form.elements.namedItem("phone")).value;

    let user : User = {
      name, 
      email,
      password,
      phone : parseInt(phoneStr)
    }

    console.log({
      user
    });

    this.userService.signup(user).subscribe(
      {
      next : (result : {message: string}) => {
        console.log(result);
        this.success = result.message;
        this.error = undefined;
        form.reset();
      },
      error : (response: HttpErrorResponse) => {
        console.log(response);
        this.error = response.error.error.message;
        this.success = undefined;
      }
    })
   
  }

}
