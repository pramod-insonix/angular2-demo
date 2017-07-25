// Browser module for run in web browser
import { BrowserModule } from '@angular/platform-browser';
// @NgModule add metadeta to Angular module
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './component/root/app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import {UserComponent} from './component/user/user.component';

//The NgModule decorator is used to later on 
//define the imports, declarations, and bootstrapping options.
//Each Angular Root module can then have multiple components to separate the functionality.
//@NgModule you can consolidate different components and services into cohesive blocks of functionality.
//@NgModule simplifies the way you define and manage dependencies in your Angular 2 apps.
@NgModule({
  //Decdlares all components used in app.
  declarations: [
    AppComponent, EmployeeComponent, UserComponent
  ],
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  providers: [],
  //Bootstart Component, The bootstrap option tells Angular which Component to 
  //bootstrap in the application.
  bootstrap: [AppComponent]
})
export class AppModule { }
