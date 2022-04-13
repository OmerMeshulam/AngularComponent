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
  dropdownContent = '';
  toggleState = false;
  toggleContent = '';
  dropdownData: string[] = ['תכנות', 'קריאה', 'A.I.','כדורגל'];
  dropdownLabel = '?מה התחביב שלך'
  dropdownPlaceholder = 'בחר תחביב';
  closeApp = false;
  isCancelClicked: boolean = false;

  hasClicked(buttonId: string){
    console.log(buttonId +' button Clicked...');
    if(this.toggleState){
      this.toggleContent = 'מחוסן';
    }
    else{
    this.toggleContent = 'לא מחוסן';
    }
    if (buttonId === 'save') {
      console.log('Your Name is: '+ this.nameInput +', the Time is: '+ this.timeInput +', your Hobbie is: '+ this.dropdownPlaceholder +', and you are: '+ this.toggleContent);  
    }
    if(buttonId === 'cancel'){
        this.dropdownPlaceholder = 'בחר תחביב';
        this.nameInput = '';
        this.timeInput = '';
        this.toggleState = false;
      }
  }
}
