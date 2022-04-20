import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() headerTitle = '';
  @Output() closeContainer = new EventEmitter();


  onClick() {
    this.closeContainer.emit();
  }

}
