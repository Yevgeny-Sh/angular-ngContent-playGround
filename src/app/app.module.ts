import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyMultislotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
