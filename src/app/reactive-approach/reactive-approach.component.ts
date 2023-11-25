import { Component , OnInit } from '@angular/core';

import { FormGroup , FormControl , Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {

  /* YOu can design the form group so that i can refer the formgroup 
      to the html */
   
  /* group is nothing but collection */

  /* form group is nothing but collection of form control
     each formcontrol is nothing but kind of a object */


  // class employee{

  // }

  //  new employee();


  customerForm : FormGroup;
  ngOnInit(): void {

    /*setup*/
      this.customerForm = new FormGroup(
        {
        'CustomerName' :  new FormControl(null,
          [  
             Validators.required , 
             Validators.minLength(5)
          ] 
          ),
        'CustomerEmail' : new FormControl(null , [Validators.required , Validators.email]),
        'CustomerState' : new FormControl("" , Validators.required)
        });
    
  }

  evtSubmit(){
    /*try to undersand*/
    console.log(this.customerForm);
  }


}
