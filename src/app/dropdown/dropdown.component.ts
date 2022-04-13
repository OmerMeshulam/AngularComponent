import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  isDisplayed = false;
  selectedContent = '';
  dropdownIcon = 'fa-solid fa-chevron-down';
  @Input() dropdownLabel: string = '';
  @Input() dropdownData: string[] = []; 
  @Input() dropdownPlaceholder: string = '';
  @Output() dropdownPlaceholderChange = new EventEmitter<string>();
  toggleDropdown() {
    if(this.dropdownIcon == 'fa-solid fa-chevron-up'){
      this.dropdownIcon = 'fa-solid fa-chevron-down';
    }
    else{
    this.dropdownIcon = 'fa-solid fa-chevron-up';
    }
    this.isDisplayed = !this.isDisplayed;    
  }
  selectedData(contentIndex: number) {
    this.dropdownIcon = 'fa-solid fa-chevron-down';
    this.isDisplayed = !this.isDisplayed;
    this.selectedContent = this.dropdownData[contentIndex];
    this.dropdownPlaceholder = this.selectedContent;
    this.dropdownPlaceholderChange.emit(this.dropdownPlaceholder);
  }
}
