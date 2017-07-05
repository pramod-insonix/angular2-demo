import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

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