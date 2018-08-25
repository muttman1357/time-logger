import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {UpdateDataService} from './services/update-data.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {Time} from './classes/Time';

@Component({
  selector: 'tl-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  private sub: Subscription;
  time: object;
  private id: string;

  constructor(
    private fb: FormBuilder,
    private updateDataService: UpdateDataService,
    private route: ActivatedRoute,
    private location: Location

  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sub = this.updateDataService.getLogById('times', this.id).subscribe(
      data => {

        // need to convert string date to Date or it wont auto-populate field
        data.date = this.convertStrDate(data.date);

        this.time = data;
          this.myForm = this.fb.group({
          date: [data.date, [
            Validators.required
          ]],
          project: [data.project, [
            Validators.required
          ]],
          hours: [data.hours, [
            Validators.required,
            Validators.pattern(/[0-9]/)
          ]],
          description: [data.description, [
            Validators.required
          ]]
        });
      },
          error => console.log(error)
    );
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
      this.updateDataService.updateTime(this.id, 'times', time);
      this.location.back();
    }
    else {
      console.log('The form is not valid');
    }
  }

  convertStrDate(date) {
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    let parts = date.split('/');
    return new Date(parts[2], parts[0] - 1, parts[1],);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
