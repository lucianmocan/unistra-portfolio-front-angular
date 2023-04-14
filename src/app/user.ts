export class User {
    id?: string;
    firstName : string = "";
    lastName: string = "";
    email: string = "";
    content: string = "";
    constructor(fname: string, lname: string, email: string, content: string){
      this.firstName = fname;
      this.lastName = lname;
      this.email = email;
      this.content = content;
    }

    isEqual(u: User): boolean{
      if (u.firstName == this.firstName && u.lastName == this.lastName && u.email == this.email && u.content == this.content){
        return true;
      }
      return false;
    }
  }