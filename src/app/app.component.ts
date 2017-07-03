import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createdUser : string ="Pramod Maurya";
  imagePath : string = 'images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  isDisable :boolean = false;
  // title = 'app';


  getImagePath() :  string {
     return this.imagePath;
  }
}
