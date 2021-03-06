import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  hasClicked(buttonId: string){
    console.log(buttonId +' button Clicked...');
    if(this.isChecked){
      this.toggleContent = 'מחוסן';
    }
    else{
    this.toggleContent = 'לא מחוסן';
    }
    if (buttonId === 'save') {
        // Prevents logging the initial selected Placeholder...
      if(this.dropdownPlaceholder === 'בחר תחביב'){
        this.dropdownContent = '';
      }
      else {
        this.dropdownContent = this.dropdownPlaceholder;
      }
      console.log('Your Name is: '+ this.nameInput +', the Time is: '+ this.timeInput +', your Hobbie is: '+ this.dropdownContent +', and you are: '+ this.toggleContent);  
    }
    if(buttonId === 'cancel'){
      if(this.dropdownPlaceholder !== 'בחר תחביב'){
      setTimeout(() => {
        this.dropdownPlaceholder = 'בחר תחביב';
        this.dropdownContent = this.dropdownPlaceholder;
      }, 1500);
        this.dropdownPlaceholder = '...הבחירה נמחקה';
    }
        this.nameInput = '';
        this.timeInput = '';
        this.isChecked = false;       
      }
  }
}
