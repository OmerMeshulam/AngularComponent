import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  isShowen = false;
  dropdownIcon = 'fa-solid fa-chevron-down';
  @Input() dropdownLabel: string = "";
  @Input() dropdownData: string[] = []; 
  @Input() dropdownPlaceholder: string = '';
  @Output() dropdownPlaceholderChange = new EventEmitter<string>();
  selectedContent = '';
  toggleDropdown() {
    if(this.dropdownIcon == 'fa-solid fa-chevron-up'){
      this.dropdownIcon = 'fa-solid fa-chevron-down';
    }
    else{
    this.dropdownIcon = 'fa-solid fa-chevron-up';
    }
    this.isShowen = !this.isShowen;    
  }
  selectedData(contentIndex: number) {
    this.dropdownIcon = 'fa-solid fa-chevron-down';
    this.isShowen = !this.isShowen;
    this.selectedContent = this.dropdownData[contentIndex];
    this.dropdownPlaceholder = this.selectedContent;
    this.dropdownPlaceholderChange.emit(this.dropdownPlaceholder);
  }
}
