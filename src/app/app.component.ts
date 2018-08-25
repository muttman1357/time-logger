import { Component } from '@angular/core';

@Component({
  selector: 'tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show = false;

  toggleNav() {
    this.show = !this.show;
  }

  hideNav() {
    this.show = false;
  }
}
