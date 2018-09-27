import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private afAuth: AngularFireAuth) { }

  login(username: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(username, password);
    // return this.http.post<any>('/api/authentication', {username: username, password: password})
    //   .map(user => {
    //     // login successful if theres a jwt token in the response
    //     if(user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //     }
    //     return user;
    //   });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
