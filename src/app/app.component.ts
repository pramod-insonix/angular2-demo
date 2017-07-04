import { Component } from '@angular/core';
import {LoginService} from './login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[LoginService]
})


export class AppComponent {

  

  constructor(private httpService: LoginService){}

  getData :string;

  createdUser : string ="Pramod Maurya";
  imagePath : string = 'images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  isDisable :boolean = false;
  // title = 'app';


  getImagePath() :  string {
     return this.imagePath;
  }

  loadData(){
    this.httpService.getCurrentTime().
      subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () =>console.log("Finished")
        );
  }
}
