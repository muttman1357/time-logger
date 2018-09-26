import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>('/api/authentication', {username: username, password: password})
      .map(user => {
        // login successful if theres a jwt token in the response
        if(user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
