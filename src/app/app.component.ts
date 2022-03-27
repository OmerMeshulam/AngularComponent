import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'targil';
  buttonText = 'ביטול';
  backgroundColor ="black";
  color ="white";
  flex = "2 1 0%";
  padding ="5px 10px";
  fontWeight ="bold";
  width = "230px";
  marginRight ="0px"
}
