import { Component, Input, SimpleChange, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Output() onChange = new EventEmitter<boolean>();
  toggleState = false;
  
  toggleSwitched() {
    this.toggleState = !this.toggleState;
    this.onChange.emit(this.toggleState);
  }

}
