import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
  
export class InputComponent {
  @Input() inputType = '';
  @Input() inputLabel = '';
  @Input() inputIcon = '';
  @Input() inputPlaceholder = '';
  @Input() inputValue = '';
  @Output() inputValueChange = new EventEmitter<string>();
  
  sendValue(value: string) {
  this.inputValueChange.emit(value);
 }
}
