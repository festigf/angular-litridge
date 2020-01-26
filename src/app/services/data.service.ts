import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }

  getDepartments(){
    return this.http.get('https://lit-ridge-34418.herokuapp.com/api/department')
  }
}