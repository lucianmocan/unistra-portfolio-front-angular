import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})

export class ContactpageComponent implements OnInit{
  user : User = { 
    firstName: "", 
    lastName: "",
    email:"", 
    content: ""
  }

  constructor(
    private userService : UserService)
    { }

    users : User[] = [];

    ngOnInit(){
      this.userService.getUsers()
      .subscribe(users => this.users = users);
    }

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

