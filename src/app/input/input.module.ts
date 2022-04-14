import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputComponent } from "./input.component";

@NgModule({
    declarations: [
        InputComponent
    ],
    exports: [
        InputComponent
    ],
    imports: [
        FormsModule
    ]
})
export class InputModule{}