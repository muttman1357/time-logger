import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  logId: string;
  constructor() { }

  ngOnInit() {
  }

  resetLog(e) {
    debugger;
    this.logId = e;
  }

  getLog(e) {
    this.logId = e;
  }

}
