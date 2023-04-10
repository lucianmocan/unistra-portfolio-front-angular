import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { AccessGuardService } from '../access-guard.service';
@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.scss']
})
export class AdminviewComponent {
  constructor(private userService: UserService, 
              private accessGuard: AccessGuardService){}

  users : User[] = [];

  ngOnInit(){
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
}
