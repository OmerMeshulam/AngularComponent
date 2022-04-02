import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'targil';
  backgroundColor = "black";
  color = "white";
  flex = "2 1 0%";
  padding = "5px 10px";
  fontWeight = "bold";
  width = "230px";
  marginRight = "0px";
  nameInput = '';
  timeInput = '';

  hasClicked(buttonId: string){
    if (buttonId === 'save') {
      console.log('The name is: '+ this.nameInput +' ,and the time is: '+ this.timeInput);
      
    }
  }
}
