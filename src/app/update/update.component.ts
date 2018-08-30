import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {UpdateDataService} from './services/update-data.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {Time} from '../shared/classes/Time';

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
        // data.start = this.convertStrDate(data.start);

        this.time = new Time(this.id, data.start, data.title, data.hours, data.description);
          this.myForm = this.fb.group({
          start: [this.convertStrDate(this.time['start']), [
            Validators.required
          ]],
          title: [this.time['title'], [
            Validators.required
          ]],
          hours: [this.time['hours'], [
            Validators.required,
            Validators.pattern(/[0-9]/)
          ]],
          description: [this.time['description'], [
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
        start: Time.mutateDate(values.start),
        title: values.title,
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

  cancelUpdate() {
    this.location.back();
  }

  /**
   * Converts a string to a Date object. parts[1] has a double digit. So it
   * slices returning the last digit and reduces it by one because js months
   * are zero based.
   * @param date
   * @returns {Date}
   */
  convertStrDate(date): Date {
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    let parts = date.split('-');
    return new Date(parts[0], (parts[1].slice(-1)) - 1, parts[2]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
