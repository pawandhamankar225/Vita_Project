import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Icourse } from './icourse';

@Injectable({
  providedIn: 'root'
})
export class CoursedetailsService {

  public url:string="/assets/coursedumy.json";
  constructor(private _http:HttpClient) { }

  getCourseList():Observable<Icourse[]>
  {
   return this._http.get<Icourse[]>(this.url);
  }

}
