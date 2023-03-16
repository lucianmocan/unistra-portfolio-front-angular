import { Component } from '@angular/core';


export class Contact {
  firstName: string;
  lastName: string;
  email: string;
  content: string;


  constructor(firstName: string, lastName: string, email: string, content: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.content = content;
  }

  createContact(firstName: string, lastName: string, email: string, content: string) : Contact{
    try {
      if (this.checkEmail(email)){
        this.validMail();
      }
    }
    catch(error){
        this.invalidMail();
        throw new Error("invalid-email");
    }
    return new Contact(firstName, lastName, email, content);
  }
  
  checkEmail(email: string) : boolean{
    return true;
  }

  validMail(){

  }
  invalidMail(){

  }


}


@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent {

}

