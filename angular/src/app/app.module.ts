import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Api1Component } from './api1/api1.component';
import { Api2Component } from './api2/api2.component';
import {FormsModule} from '@angular/forms'; 
import { NodeapisService } from './nodeapis.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    Api1Component,
    Api2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ NodeapisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
