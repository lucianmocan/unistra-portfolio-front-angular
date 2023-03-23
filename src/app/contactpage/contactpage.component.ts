import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})

export class ContactpageComponent {
  user : User = { 
    firstName: "", 
    lastName: "",
    email:"", 
    content: ""
  }

  constructor(
    private http: HttpClient, 
    private userService : UserService)
    { }


    submitContact(){
      this.userAdd();
    }

    userAdd(){
      console.log(this.user);
      this.userService.addUser(this.user).subscribe(
        user => {
          console.log(user);
        }
      );
    }



}

