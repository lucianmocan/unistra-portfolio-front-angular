import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardService implements CanActivate {

  activated = false;
  constructor(private router: Router) { }

  canActivate(){
    if (this.activated == false){
      this.router.navigate(['home']);
    }
    return this.activated;
  }
}
