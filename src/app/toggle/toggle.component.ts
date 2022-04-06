import { Component, Input, SimpleChange, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Output() toggleState = new EventEmitter<any>();
  isToggleState = false;
  @Input() isCancelClicked: boolean = false;
  stam = document.querySelector('.checkbox');

  ngOnChanges(changes: SimpleChange){
    if (this.isCancelClicked) {
      console.log(this.stam);
      
    }    
  }

  toggleSwitched() {
    this.isToggleState = !this.isToggleState;
    this.toggleState.emit(this.isToggleState);
  }

}
