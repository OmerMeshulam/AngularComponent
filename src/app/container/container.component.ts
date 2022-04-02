import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  @Input() headerTitle: string = "אירוע חדש";
  @Input() headerIcon: string = "fa-solid fa-x";

}
