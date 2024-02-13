import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8000/api';
  private addUserUrl = this.userUrl + "addcontact.php";
  private getUsersUrl = this.userUrl + "getcontacts.php";
  private deleteUsersUrl = this.userUrl + "deletecontact.php";
  private updateUsersUrl = this.userUrl + "updatecontact.php";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Response-Type': 'application/json'}),
    params: new HttpParams()
  }; 

  

  constructor(
    private http: HttpClient
  ) { }

  getUserById(id: string): Observable<User> {
    this.httpOptions.params= new HttpParams().set('id', id);
    return this.http.get<User>(this.getUsersUrl, this.httpOptions);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.addUserUrl, user, this.httpOptions);
  }

  deleteUserByID(id: string): Observable<User>{
    this.httpOptions.params = new HttpParams().set('id', id);
    return this.http.post<User>(this.deleteUsersUrl, this.httpOptions);
  }

  updateUser(user: User): Observable<User>{
    return this.http.post<User>(this.updateUsersUrl, user, this.httpOptions);
  }

}
