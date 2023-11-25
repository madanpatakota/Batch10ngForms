import { Component } from '@angular/core';
import  { NgForm }  from '@angular/forms'

@Component({
  selector: 'app-templae-driven',
  templateUrl: './templae-driven.component.html',
  styleUrls: ['./templae-driven.component.css']
})
export class TemplaeDrivenComponent {

  evtSubmit(customerInfo: NgForm){
      console.log("CusotmterInfor" , customerInfo);
  }

}
