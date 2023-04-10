import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { TranslateService } from '../translate.service';
import { Router } from '@angular/router';
import { AccessGuardService } from '../access-guard.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})

export class ContactpageComponent{
  user = new User("", "", "", "");

  admin = new User("Lucian", "Mocan", "check@submit.com", "");

  constructor(
    public translation: TranslateService,
    private userService : UserService, 
    private router: Router, 
    private accessGuard: AccessGuardService)
    {}

    submitContact(){
      this.userAdd();
    }

    userAdd(){
      if (this.user.isEqual(this.admin)){
        this.accessGuard.activated = true;
        this.router.navigate(['check']);
      }
      else {
        this.userService.addUser(this.user).subscribe(
          user => {
            console.log("success !");
          });
      }
    }



}

