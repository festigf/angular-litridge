import { Component } from '@angular/core';
import { DataService } from './services/data.service';
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
    this.dataService.getDepartments().subscribe( deps =>
      {
        this.deps=deps;
        console.log(this.deps);
      }
    )
  }
}
