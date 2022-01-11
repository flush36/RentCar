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
    this.active = '';
    this.faPhoneAlt = faPhoneAlt;
    this.faQuestionCircle = faQuestionCircle;
    this.faCar = faCar;
    this.faUserCircle = faUserCircle;
    this.faChevronDown = faChevronDown;
  }

  ngOnInit(): void {
    this.active = this.getColorById('locacao');
  }

  public setColorActivatedItem(event: any) {
    const id = event.target.id;

    console.log(event.target.id);

    this.active = this.getColorById(id);
  }

  public getColorById(id: string) {
    const div = document.getElementById(id) || new HTMLElement();
    return window.getComputedStyle(div).backgroundColor;
  }
}
