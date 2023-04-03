import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8000/';
  private addUserUrl = this.userUrl + "addcontact.php";
  private getUsersUrl = this.userUrl + "getcontacts.php";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Response-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.addUserUrl, user, this.httpOptions);
  }


}
