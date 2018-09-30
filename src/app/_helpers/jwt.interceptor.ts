import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserService} from '../shared/user/user.service';
import {zip} from 'rxjs/observable/zip';
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private user: Observable<firebase.User> = null;
  private userDetails: firebase.User = null;

  constructor(private afAuth: AngularFireAuth,
              private userService: UserService,
              private router: Router) {
    this.user = this.afAuth.user;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    this.user.subscribe(
      user => {
        if (user) {
          this.userDetails = user;
          if (this.userDetails && this.userDetails['qa']) {
            // let headers = new HttpHeaders();
            // const headers = new HttpHeaders({'Authorization': `accessToken: ${this.userDetails['qa']}`});
            // requests are immutable so have to clone the request [request.clone]
            // request = request.clone({
            //   setHeaders: {
            //     Authorization: `Bearer ${this.userDetails['qa']}`
            //   }
            // });
          }
        }
        else {
          this.userDetails = null;
          // console.log('User details null', this.userDetails);
        }
      }
    );

    return next.handle(request);
  }
}
