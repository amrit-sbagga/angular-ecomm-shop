import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

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
    })
   
  }

}
