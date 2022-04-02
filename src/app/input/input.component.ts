import { Component, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
  
export class InputComponent {
  @Input() inputType = 'text';
  @Input() inputLabel = 'שם';
  @Input() inputIcon = 'fa-solid fa-pencil';
  @Input() inputPlaceholder = 'שם מלא';
  @Output() inputValue = '';

  
  // ngOnChanges(changes: any){
  //   console.log(changes
  //     );
    
  //   this.inputValue = changes.inputValue.currentValue;
  // }

}
