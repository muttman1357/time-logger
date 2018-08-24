import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LogFormDataService} from './services/log-form-data.service';
import {Time} from './classes/Time';

@Component({
  selector: 'tl-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private logFormDataService: LogFormDataService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      date: ['', [
        Validators.required
      ]],
      project: ['', [
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
  }

  submitLogForm(form: FormGroup) {
    if (form.valid) {
      const values = this.myForm.value;
      const time = {
        date: Time.mutateDate(values.date),
        project: values.project,
        hours: values.hours,
        description: values.description
      };
      this.logFormDataService.postTime('times', time);
    }

    console.log('The form is not valid');
  }

}
