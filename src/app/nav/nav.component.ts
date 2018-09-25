import { Component } from '@angular/core';

@Component({
  selector: 'tl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  show = false;

  toggleNav() {
    this.show = !this.show;
  }

  hideNav() {
    this.show = false;
  }

}
