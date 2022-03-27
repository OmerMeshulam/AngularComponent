import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText = 'ביטול';
  @Input() backgroundColor ="yellow";
  @Input() color ="black";
  @Input() flex = "1 1 0%";
  @Input() padding ="0px";
  @Input() fontWeight ="lighter";
  @Input() width ="100px";
  @Input() marginRight ="0.5rem";
  constructor() { }

  ngOnInit(): void {
  }

}
