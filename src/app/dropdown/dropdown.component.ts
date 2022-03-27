import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
isShowen = false;
Text = '?מה התחביב שלך';


  selectHobbie() {
    this.isShowen = !this.isShowen;
  }
  choosenHobbie(hobbie: any) {
    this.isShowen = !this.isShowen;
    this.Text = hobbie.dataset.value;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
