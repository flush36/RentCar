import { Component, OnInit } from '@angular/core';
import {
  faCar,
  faChevronDown,
  faPhoneAlt,
  faQuestionCircle,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active: string = '#f97d00';
  faPhoneAlt = faPhoneAlt;
  faQuestionCircle = faQuestionCircle;
  faCar = faCar;
  faUserCircle = faUserCircle;
  faChevronDown = faChevronDown;

  constructor() {}

  ngOnInit(): void {}

  public setColorActivatedItem(event: any) {
    const id = event.target.id;
    this.active =
      document.getElementById(id)?.style.backgroundColor || this.active;
  }
}
