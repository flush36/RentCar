import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active: string = '#f97d00';

  constructor() {}

  ngOnInit(): void {}

  public setColorActivatedItem(event: any) {
    const id = event.target.id;
    this.active =
      document.getElementById(id)?.style.backgroundColor || this.active;
  }
}
