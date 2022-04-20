import { Component } from '@angular/core';
import { FunctionsService } from './functions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FunctionsService]
})
export class AppComponent {
  constructor(private AppFunctions: FunctionsService) {
  }
  title = 'targil';
  nameInput = '';
  timeInput = '';
  isChecked = false;
  toggleContent = '';
  dropdownData: string[] = ['תכנות', 'קריאה', 'A.I.','כדורגל'];
  dropdownLabel = '?מה התחביב שלך'
  dropdownPlaceholder = 'בחר תחביב';
  dropdownContent = '';
  closeApp = false;

  saveBtnClicked() {
    console.log('Save button was clicked...');
    this.toggleContent = this.AppFunctions.setToggleContent(this.isChecked);
    this.dropdownContent = this.AppFunctions.preventDefaultPlaceholder(this.dropdownPlaceholder);
    this.AppFunctions.logData(this.nameInput, this.timeInput, this.dropdownContent, this.toggleContent);
  }
  cancelBtnClicked(){
    console.log('Cancel button was clicked...');
     //Creates a quick animation informing the user the content was deleted.
    setTimeout(() => {
        this.dropdownContent, this.dropdownPlaceholder = this.AppFunctions.resetDropdown(this.dropdownPlaceholder);
      }, 1500);
        this.dropdownPlaceholder = '...הבחירה נמחקה';
        this.nameInput = '';
        this.timeInput = '';
        this.isChecked = false;
      }
}
