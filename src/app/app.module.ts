// Browser module for run in web browser
import { BrowserModule } from '@angular/platform-browser';
// @NgModule add metadeta to Angular module
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent
  ],
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
