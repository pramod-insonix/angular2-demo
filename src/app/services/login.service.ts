import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { UserModel } from '../model/userModel';
import {Observable} from 'rxjs/Rx';




@Injectable()
export class LoginService {

     private BASE_URL:string = 'http://localhost:8080/restful-public-api/';

    // Resolve HTTP using the constructor
    // Http returns an Observable with the Response object, versus $http which returns Promises. 
    //Observables is that Observables may emit data more than once.
    // Http doesn't actually make the request to the server until there is a subscription to the observable.
    constructor(
        private http: Http
    ) { }



    getCurrentTime() {
        // return this.http.get("http://date.jsontest.com/")]
        return this.http.get("http://localhost:8080/restful-public-api/user/allUsers/")
            .map((res: Response) => res.json());;
    }

   


}