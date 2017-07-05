import {Component, OnInit} from '@angular/core'

@Component({
    selector: `user-app`,
    templateUrl : `./user.component.html`,
    styleUrls : [`./user.component.css`]
})

export class UserComponent implements OnInit{
  user_id:number;
  username:string;
  email:string;

  constructor(){  }


  addUser(userData){
    
  }

  

  
  ngOnInit(){

  }
}
