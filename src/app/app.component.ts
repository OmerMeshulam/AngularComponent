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
  toggleContent = 'לא מחוסן';
  dropdownData: string[] = ['תכנות', 'קריאה', 'A.I.','כדורגל'];
  dropdownLabel = '?מה התחביב שלך'
  closeApp = false;
  isCancelClicked: boolean = false;

  saveNameInput(input: string){
    this.nameInput = input;
    this.isCancelClicked = false;
  }
  saveTimeInput(input: string){
    this.timeInput = input;    
    this.isCancelClicked = false;
  }
  saveDropdownContent(content: string){
    this.dropdownContent = content;
    this.isCancelClicked = false;
  }
  saveToggleState(state: boolean) {
    if(state){
      this.toggleContent = 'מחוסן';
    }
    else{
    this.toggleContent = 'לא מחוסן';
    }
    this.isCancelClicked = false;
  }

  hasClicked(buttonId: string){
    console.log(buttonId +' button Clicked...');
    if (buttonId === 'save') {
      console.log('Your Name is: '+ this.nameInput +', the Time is: '+ this.timeInput +', your Hobbie is: '+ this.dropdownContent +', and you are: '+ this.toggleContent);  
      this.isCancelClicked = false; 
      
    }
    if(buttonId === 'cancel'){
        this.dropdownContent = '';
        this.nameInput = '';
        this.timeInput = '';
        this.isCancelClicked = true;
      }
  }

  hideContainer(){

  }
}
