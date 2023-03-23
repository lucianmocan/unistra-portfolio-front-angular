import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://127.0.0.1:8000';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text', 'Response-Type': 'text'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError('getUsers'))
      );
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }

  private log(message: string){
    console.log(message);
  }

  private handleError(operation: string){
    console.log("error " + operation);
    return (error: any) => {
      console.error(error);
      return of([]);
    };
  }

}
