import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private user: Observable<firebase.User> = null;
  private userDetails: firebase.User = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.user;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log('User details', this.userDetails);
          if (this.userDetails && this.userDetails['qa']) {
            request = request.clone({
              setHeaders: {
                 Authorization: `accessToken=${this.userDetails['qa']}`
              }
            });
          }
        }
        else {
          this.userDetails = null;
          console.log('User details null', this.userDetails);
        }
      }
    );

    return next.handle(request);
  }
}
