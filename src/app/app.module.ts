import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ContainerModule } from './container/container.module';
import { ButtonModule } from './button/button.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ToggleModule } from './toggle/toggle.module';
import { InputModule } from './input/input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToggleModule,
    InputModule,
    DropdownModule,
    ContainerModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
