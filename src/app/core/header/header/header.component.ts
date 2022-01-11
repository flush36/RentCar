import { Component, OnInit } from '@angular/core';
import {
  faCar,
  faChevronDown,
  faPhoneAlt,
  faQuestionCircle,
  faUserCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active: string;
  faPhoneAlt: IconDefinition;
  faQuestionCircle: IconDefinition;
  faCar: IconDefinition;
  faUserCircle: IconDefinition;
  faChevronDown: IconDefinition;

  constructor() {
    this.active = '#f97d00';
    this.faPhoneAlt = faPhoneAlt;
    this.faQuestionCircle = faQuestionCircle;
    this.faCar = faCar;
    this.faUserCircle = faUserCircle;
    this.faChevronDown = faChevronDown;
  }

  ngOnInit(): void {}

  public setColorActivatedItem(event: any) {
    const id = event.target.id;
    this.active =
      document.getElementById(id)?.style.backgroundColor || this.active;
  }
}
