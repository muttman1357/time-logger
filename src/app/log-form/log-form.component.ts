import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LogFormDataService} from './services/log-form-data.service';
import {SharedService} from '../shared/services/shared.service';
import {Time} from '../shared/classes/Time';
import {Subscription} from 'rxjs/Subscription';
import { Location } from '@angular/common';

@Component({
  selector: 'tl-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  dateSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private logFormDataService: LogFormDataService,
    private sharedService: SharedService,
    private location: Location) {}

  ngOnInit() {

    this.myForm = this.fb.group({
      start: ['', [
        Validators.required
      ]],
      title: ['', [
        Validators.required
      ]],
      hours: ['', [
        Validators.required,
        Validators.pattern(/[0-9]/)
      ]],
      description: ['', [
        Validators.required
      ]]
    });

    // data.date is a Moment. Add a day to it and then
    // convert it to a Date.
    this.dateSub = this.sharedService.addEventSubject.subscribe(
      data => {
        let momentDate = data['date'].add(1, 'days').toDate();
        this.myForm.controls['start'].setValue(momentDate);
      }
    );
  }

  cancel() {
    this.location.back();
  }


  submitLogForm(form: FormGroup) {
    if (form.valid) {
      const values = this.myForm.value;
      const time = {
        start: Time.mutateDate(values.start),
        title: values.title,
        hours: values.hours,
        description: values.description
      };
      this.logFormDataService.postTime('times', time);
      this.location.back();
    }
    else {
      console.log('The form is not valid');
    }
  }

  ngOnDestroy() {
    this.dateSub.unsubscribe();
  }



}
