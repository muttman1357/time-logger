import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient,
              private afAuth: AngularFireAuth,
              private router: Router) { }

  login(username: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(username, password).then(
      user => {
        console.log(user);
        if(user && user.pa) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/main']);
        }
      }
    )
      .catch(error => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });

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
    this.afAuth.auth.signOut().then(() => {
      // Sign-out successful.
      localStorage.removeItem('currentUser');
    }).catch(error => {
      // An error happened.
    });
  }

}
