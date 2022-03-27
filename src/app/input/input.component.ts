import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() inputType = 'text';
  @Input() inputLabel = 'שם';
  @Input() inputIcon = 'fa-solid fa-pencil';
  constructor() {}

  ngOnInit(): void {
  }

}
