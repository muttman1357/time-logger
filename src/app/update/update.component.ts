import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LogFormDataService} from '../log-form/services/log-form-data.service';
import {Time} from '../log-form/classes/Time';

@Component({
  selector: 'tl-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private updateDataService: LogFormDataService) {}

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
      this.updateDataService.postTime('times', time);
    }

    console.log('The form is not valid');
  }

}
