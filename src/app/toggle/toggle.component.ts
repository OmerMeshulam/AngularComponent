import { Component, Input, SimpleChange, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Output() toggleState = new EventEmitter<any>();
  isToggleState = false;
  // @Input() isCancelClicked: boolean = false;

  // ngOnChanges(changes: SimpleChange){
  //   if (this.isCancelClicked) {
  //   }    
  // }

  toggleSwitched() {
    this.isToggleState = !this.isToggleState;
    this.toggleState.emit(this.isToggleState);
  }

}
