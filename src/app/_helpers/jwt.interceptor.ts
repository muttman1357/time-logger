import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    // testing
    let testObject = { 'username': 'ron', 'token': 1234};
    localStorage.setItem('currentUser', JSON.stringify(testObject));
    // add authorization header with jwt token if available
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      console.log('header added');
      // request = request.clone({
      //   setHeaders: {
      //     Authorization: `Bearer ${currentUser.token}`
      //   }
      // });
    }

    return next.handle(request);
  }
}
