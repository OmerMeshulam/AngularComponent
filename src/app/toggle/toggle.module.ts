import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToggleComponent } from "./toggle.component";

@NgModule({
declarations: [
    ToggleComponent
],
exports: [
ToggleComponent
],
imports: [
    FormsModule
]
})
export class ToggleModule {}