import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "";

  constructor(private _user:Iuser,private http:HttpClient) {
   }

   postLoggedinUser(userobject)
   {
     return this.http.post(this.url,userobject);
   }
}
