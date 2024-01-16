import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import {ItemState} from "./store/state";
import {NgxsModule} from "@ngxs/store";

@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ItemState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
