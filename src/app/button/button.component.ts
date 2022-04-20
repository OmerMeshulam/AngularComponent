import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonTitle = '';
  @Input() buttonId = '';
  @Output() buttonClicked = new EventEmitter<string>();

  onClick() {
    this.buttonClicked.emit(this.buttonId);
  }

}
