import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {LoginService} from './services/login.service';

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
    private loginService: LoginService
  ) {}

  ngOnInit() {

    this.myForm = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });

    this.sub = this.loginService.request().subscribe(
      data => console.log
    );
  }


  submitLogForm(form) {
    if(form.valid) {
      console.log('form submitted');
    }
  }

  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

}
