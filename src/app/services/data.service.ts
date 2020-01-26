import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Department } from "../domain/department";
@Injectable()
export class DataService {
  deps: Department[] = [];
  frmDep: FormGroup;
  constructor(private http: HttpClient, fb: FormBuilder) {
    this.frmDep = fb.group({
      codeDepartment: [],
      dateOpened: [],
      description: [],
      location: [],
      name: [],
      telephone: []
    });
  }
  getDepartments() {
    return this.http.get(
      "https://lit-ridge-34418.herokuapp.com/api/department"
    );
  }
}

/*
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
  this.myForm = fb.group({
    'sku': ['ABC123']
   });
}

ngOnInit(){

}
onSubmit(value: string): void {
   console.log('you submitted value: ', value);
 }
}

*/
