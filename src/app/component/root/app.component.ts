import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import { UserModel } from '../../model/userModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[UserService]
})


export class AppComponent implements OnInit{

  constructor(private httpService: UserService){}
  private userModel:UserModel = new UserModel( 0 ,'','','',0);
  getUsers :string;

  createdUser : string ="Pramod Maurya";
  imagePath : string = 'images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  isDisable :boolean = false;
  private currentUser:UserModel;


 ngOnInit(){
 this.loadAllUsers();
}

  getImagePath() :  string {
     return this.imagePath;
  }

  

  public loadAllUsers(){
    //JSON.stringify(data)
    this.httpService.getUsers().subscribe(data => this.getUsers = data,
         error => alert(error),
         () =>console.log("User Data Loaded from user service.")
         );
  }

  public userSelected(user){		
		this.currentUser = user;
	}

  public isSelected(user): boolean {
		if(!this.currentUser) {
			return false;
		}
		return this.currentUser.userId ===  user.userId ? true : false;
	}

  public addUserComponent(){
    this.httpService.addUser(this.userModel).subscribe(
                        response =>  {
							if(response.error) { 
	                        	alert(`The user could not be added, server Error.`);
	                        } else {
                            console.log("Cutome Error **************");
	                        	//EmitterService.get(this.userList).emit(response.users);
	                        }
                        },
                        error=> {
                       		alert(`The user could not be added, server Error.`);
                       	}
                    );
  }

 public deleteUserComponent(userId:number){
		this.httpService.deleteUser(userId).subscribe(
						response => {
							if(response.error) { 
	                        	alert(`The user could not be deleted, server Error.`);
	                        } else {
	                        	//this.usersList = response.users;
	                        }
                        },
                       error=> { 
                       		alert(`The user could not be deleted, server Error.`);
                       	}
                    );
	}

  public updateUserComponent(){
    this.httpService.updateUser(this.userModel).subscribe(
                        response =>  {
							if(response.error) { 
	                        	alert(`The user could not be Updated, server Error.`);
	                        } else {
                            console.log("Cutome Error **************");
	                        	//EmitterService.get(this.userList).emit(response.users);
	                        }
                        },
                        error=> {
                       		alert(`The user could not be Updated, server Error.`);
                       	}
                    );
  }


}
