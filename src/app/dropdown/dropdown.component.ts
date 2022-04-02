import { Component, ElementRef, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  isShowen = false;
  arrowIcon = 'fa-solid fa-chevron-down';
  @Input() dropdownLabel: string = "?מה התחביב שלך";
  @Input() dropdownData: string[] =['תכנות', 'קריאה', 'שירה','כדורגל']; 
  dropdownPlaceholder: string =this.dropdownData[0];


  toggleDropdown() {
    this.isShowen = !this.isShowen;
    if (this.arrowIcon === 'fa-solid fa-chevron-up') {
      this.arrowIcon = 'fa-solid fa-chevron-down';
    }
    else
    this.arrowIcon = 'fa-solid fa-chevron-up'
    
  }
  selectedData(contentIndex: number) {
    this.isShowen = !this.isShowen;
    this.arrowIcon = 'fa-solid fa-chevron-down';
    this.dropdownPlaceholder = this.dropdownData[contentIndex];
  }

}
