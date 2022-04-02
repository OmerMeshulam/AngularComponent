import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  
  toggleState = false;
  
  constructor() {

  }

}
