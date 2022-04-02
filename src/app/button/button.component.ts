import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonTitle = 'ביטול';
  @Input() backgroundColor ="white";
  @Input() color ="black";
  @Input() flex = "1 1 0%";
  @Input() padding ="0px";
  @Input() fontWeight ="lighter";
  @Input() width ="100px";
  @Input() marginRight ="0.5rem";
  @Input() buttonId = 'cancel';
  @Output() buttonClicked = new EventEmitter<string>();

  onClick() {
    console.log( this.buttonId + " Button Clicked...");
    this.buttonClicked.emit(this.buttonId);
  }

}
