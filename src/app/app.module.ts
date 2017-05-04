import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlinkDirective } from '../blinker/blinker.directive';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
