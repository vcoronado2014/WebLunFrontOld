import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Bootstrap js components
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//import { TooltipModule } from 'ngx-bootstrap/tooltip';
//import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
