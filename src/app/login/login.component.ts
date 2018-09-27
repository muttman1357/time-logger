import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {AuthenticationService} from './services/authentication.service';

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
    private authService: AuthenticationService
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


  submitLogForm(form) {
    if(form.valid) {
      console.log(form);
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
