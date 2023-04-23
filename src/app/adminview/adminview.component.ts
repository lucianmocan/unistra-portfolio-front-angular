import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { TranslateService } from '../services/translate.service';

class Search {
  value: string;
  choice: string;
  constructor(value: string, choice: string){
    this.value = value;
    this.choice = choice;
  }
}

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.scss']
})
export class AdminviewComponent {
  constructor(private userService: UserService, 
              public translation: TranslateService){}

  users : User[] = [];

  search: Search = new Search("", "");
  ngOnInit(){
  }

  updateContact: string = "";
  updateSuccess: boolean = false;
  updateClicked: boolean = false;

  searchAction(){
    if (this.search.choice == 'all'){
      this.userService.getUsers()
      .subscribe(
        users => { this.users = users; }
      );
    }
    else if (this.search.choice == 'id'){
      this.userService.getUserById(this.search.value)
      .subscribe(user => {
        this.users = [user];
      });
    }
  }

  deleteUser(e: Event){
    this.userService.deleteUserByID((e.target as HTMLButtonElement).value)
    .subscribe(() =>{
      this.userService.getUsers()
      .subscribe(
        users => {this.users = users;}
      )
    })
  }

  updateUser(e: Event){
    if (this.updateClicked){
      this.updateContact = "";
      this.updateClicked = false;
    }
    else {
      this.updateContact = (e.target as HTMLButtonElement).value;
      this.updateClicked = true;
    }
  }

  updateCompleted(){
    this.updateContact = "completed";
    this.updateSuccess = true;
    setTimeout(() => {
      this.updateSuccess = false;
    }, 2000); 
  }
}
