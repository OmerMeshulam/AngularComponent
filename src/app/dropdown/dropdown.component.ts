import { Component, OnInit, EventEmitter, Input, Output, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  isShowen = false;
  @Input() dropdownLabel: string = "";
  @Input() dropdownData: string[] = []; 
  dropdownPlaceholder: string = '';
  @Output() dropdownContent = new EventEmitter<string>();
  selectedContent = '';
  @Input() isCancelClicked: boolean = false;

  ngOnChanges(changes: SimpleChange){
    if (this.isCancelClicked) {
      this.dropdownPlaceholder = this.dropdownData[0];
    }    
  }
  ngOnInit() {
    this.dropdownPlaceholder = this.dropdownData[0];
  }  
  toggleDropdown() {
    this.isShowen = !this.isShowen;    
  }
  selectedData(contentIndex: number) {
    this.isShowen = !this.isShowen;
    this.selectedContent = this.dropdownData[contentIndex];
    this.dropdownPlaceholder = this.selectedContent;
    this.dropdownContent.emit(this.selectedContent);
  }
}
