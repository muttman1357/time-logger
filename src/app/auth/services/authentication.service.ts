import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  private user: Observable<firebase.User> = null;
  private userDetails: firebase.User = null;
  private returnUrl: string;

  constructor(private http: HttpClient,
              private afAuth: AngularFireAuth,
              private router: Router,
              private route: ActivatedRoute)
  {
    this.user = this.afAuth.user;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  login(username: string, password: string) {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/main';
    this.afAuth.auth.signInWithEmailAndPassword(username, password).then(
      user => {
        if(user && user.user['qa']) { // qa is the token
          localStorage.setItem('currentUser', JSON.stringify(user));
          // login successful so redirect to return url
          this.router.navigateByUrl(this.returnUrl);
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
  }

  logout() {
    this.afAuth.auth.signOut().then(
      () => {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
      }
    );
}

  // logout() {
  //   // remove user from local storage to log user out
  //   this.afAuth.auth.signOut().then(() => {
  //     // Sign-out successful.
  //     localStorage.removeItem('currentUser');
  //     localStorage.removeItem('firebase:host:time-logger-54930.firebaseio.com');
  //   }).catch(error => {
  //     // An error happened.
  //   });
  // }

}
