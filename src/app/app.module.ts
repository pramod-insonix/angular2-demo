// Browser module for run in web browser
import { BrowserModule } from '@angular/platform-browser';
// @NgModule add metadeta to Angular module
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './component/root/app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import {UserComponent} from './component/user/user.component';


@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, UserComponent
  ],
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  providers: [],
  //Bootstart Component
  bootstrap: [AppComponent]
})
export class AppModule { }
