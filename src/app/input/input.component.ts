import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
  
export class InputComponent{
  @Input() inputType = 'text';
  @Input() inputLabel = 'שם';
  @Input() inputIcon = 'fa-solid fa-pencil';
  @Input() inputPlaceholder = 'שם מלא';
  @Input() curInputValue = '';
  @Output() inputValue = new EventEmitter<string>();
  @Input() isCancelClicked: boolean = false;

  ngOnChanges(changes: SimpleChange){
    if (this.isCancelClicked) {
      this.curInputValue = '';
    }    
  }
  
  sendValue(value: string) {
  this.inputValue.emit(value);
 }
}
