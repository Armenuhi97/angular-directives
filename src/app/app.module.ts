import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowElementDirective } from './directives/show-element.directive';
import { ChangeBackgroundColorDirective } from './directives/change-background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowElementDirective,
    ChangeBackgroundColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
