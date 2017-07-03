import {Component} from '@angular/core'

// Becomes angular component after define @Component
@Component({
    selector : `my-employee`,
    //corresponding view template
    templateUrl : `app/employee/employee.component.html`,
    styleUrls : [ `app/employee/employee.component.css`]
})


//Component Class and above is corresponding view template
export class EmployeeComponent{

    firstname :string ="Pramod";
    lastname:string ="Maurya";
    contact:string ="9418542708";

}