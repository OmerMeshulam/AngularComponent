import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Input() isChecked = false;
  @Output() isCheckedChange = new EventEmitter<boolean>();
  
  toggleSwitched() {
    this.isCheckedChange.emit(this.isChecked);
  }

}
