import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { TranslateService } from '../services/translate.service';
import { Router } from '@angular/router';
import { AccessGuardService } from '../services/access-guard.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})

export class ContactpageComponent {
  @Input() user = new User("", "", "", "");
  @Input() userUpdate! : boolean;
  @Output() updateCompleted = new EventEmitter<boolean>();


  @ViewChild('email') email! : NgModel;
  @ViewChild('lname') lname! : NgModel;
  @ViewChild('fname') fname! : NgModel;
  @ViewChild('subject') subject! : NgModel;
  
  admin = new User("Lucian", "Mocan", "check@submit.com", "");
  clickedSubmit = false;
  didPost = false;
  
  constructor(
    public translation: TranslateService,
    private userService : UserService, 
    private router: Router, 
    private accessGuard: AccessGuardService)
    {}

    submitContact(){
      this.clickedSubmit = true;
      this.userAdd();
    }

    userAdd(){
      if (this.email.errors == null && this.lname.errors == null && this.fname.errors == null && this.subject.errors == null){
        if (this.userUpdate){
            this.userService.updateUser(this.user).subscribe(
              () => {
                this.didPost = true;
                this.updateCompleted.emit(true);
              }
            )
        }
        else {
            this.userService.addUser(this.user).subscribe(
              () => {
                this.didPost = true;
                this.router.navigateByUrl('home', { skipLocationChange: true })
                .then(() => {
                  this.router.navigate(['contact']);
                });
              });
        }
      }
      else if (this.user.isEqual(this.admin)){
        this.accessGuard.activated = true;
        this.router.navigate(['check']);
      }
    }



}

