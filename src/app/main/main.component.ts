import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../auth/services/authentication.service';

@Component({
  selector: 'tl-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  logId: string;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  resetLog(e) {
    this.logId = null;
  }

  getLog(e) {
    this.logId = e;
  }

}
