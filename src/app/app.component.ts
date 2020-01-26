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