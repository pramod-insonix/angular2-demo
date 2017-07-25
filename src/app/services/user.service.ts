import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { UserModel } from '../model/userModel';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    private BASE_URL:string = 'http://localhost:8080/restful-public-api/';
    headers: Headers;
    options: RequestOptions;
     userData : any;


    // Resolve HTTP using the constructor
    // Http returns an Observable with the Response object, versus $http which returns Promises. 
    //Observables is that Observables may emit data more than once.
    // Http doesn't actually make the request to the server until there is a subscription to the observable.
    constructor(private http: Http){ 
    this.headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
    this.options = new RequestOptions({ headers: this.headers });
   }


   



    getUsers(){
        return this.http.get(this.BASE_URL +"user/allUsers/")
            .map((res: Response) => res.json());
            // .map(res=>{
            //     this.userData = res;
            //     console.log(this.userData);
            //     if(this.userData){
            //         res.json();
            //     }
            // })
    }



 // Simulate POST. we are sending a request in JSON format
   public addUser(body:UserModel){
        let bodyString = JSON.stringify(body); // Stringify payload
		return this.http.post(this.BASE_URL + "user/addUser", bodyString, this.options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}




   public updateUser(body:UserModel){
		return this.http.put(this.BASE_URL + "user/update", JSON.stringify(body), this.options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}


	public deleteUser(usersID:number) : Observable<any>{
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
         let cpParams = new URLSearchParams();
         cpParams.set('id', usersID.toString());
          let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
         if (confirm("Are you sure you want to delete ?")) {
		return this.http.delete(this.BASE_URL + "user/" + usersID, options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
         }

//  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//      let cpParams = new URLSearchParams();
//      cpParams.set('id', articleId);			
//      let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
//      return this.http.delete(this.articleUrl, options)
// 	   .map(success => success.status)
// 	   .catch(this.handleError);



	}

    public getUserById(usersID:number){
		return this.http.get(this.BASE_URL + "user/getUser/" + usersID)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
         
    }
}