import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Department} from '../domain/department';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  deps;
  constructor(private dataService:DataService){}
  onLoad(){
    this.dataService.getDepartments().subscribe( (deps:Department[]) =>
      {
        this.dataService.deps=deps;
        console.log(this.deps);
      }
    )
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