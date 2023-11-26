import { Component, OnInit } from '@angular/core';

import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-fourth-class-reactive-approach',
  templateUrl: './forms-fourth-class-reactive-approach.component.html',
  styleUrls: ['./forms-fourth-class-reactive-approach.component.css'],
})
export class FormsFourthClassReactiveApproachComponent implements OnInit {
  /* By clicking add button you should dynamically add the controls*/
  /* Launage you should enter */

  //  formarry ---> formgroup

  // i have to create the formgroup again i have to push this form group into the formarray

  MainForm: FormGroup;

  ngOnInit(): void {
    // {
    //    _____________  : [{
    //      ______________ : ______
    //    }]   // Box
    // }

    this.MainForm = new FormGroup({
      LangDetails: new FormArray([
        new FormGroup({
          LaungageName: new FormControl(),
          Proficency: new FormControl(),
        }),
      ]),
    });
  }

  /*should return the formgroups List*/
  getFormGroups() {
    var formArray = this.MainForm.get('LangDetails') as FormArray;

    return formArray.controls;
    // returns the formgrups
  }

  evtCreateFormGroup() {
    // I want to prepare the formgroup and load into
    //   FormArrY
    var formArray = this.MainForm.get('LangDetails') as FormArray;
    
    formArray.push(
      new FormGroup({
        LaungageName: new FormControl(),
        Proficency: new FormControl(),
      })
    );
  }
}
