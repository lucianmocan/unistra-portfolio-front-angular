import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { AccessGuardService } from '../access-guard.service';

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
              private accessGuard: AccessGuardService){}

  users : User[] = [];
  
  search: Search = new Search("", "");
  ngOnInit(){
  }

  searchAction(){
    console.log(this.search);
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
}
