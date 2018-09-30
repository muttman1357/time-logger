import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {AuthenticationService} from '../auth/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'tl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {

    this.myForm = this.fb.group({
      username: ['ron.mares@gmail.com', [
        Validators.required
      ]],
      password: ['3u!esasA', [
        Validators.required
      ]]
    });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(
      user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/main']);
      }
    ).catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(`${errorCode} ${errorMessage}`);
    });
  }




  submitLogForm(form) {
    if(form.valid) {
      let username = form.controls.username.value;
      let password = form.controls.password.value;
      this.authService.login(username, password);
    }
  }

  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

}
