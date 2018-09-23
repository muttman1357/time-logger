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
    this.logId = null;
  }

  getLog(e) {
    this.logId = e;
  }

}
