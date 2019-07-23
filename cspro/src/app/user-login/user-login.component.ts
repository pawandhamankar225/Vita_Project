import { Component, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:Iuser=new Iuser();
  constructor(private service:LoginService) { }

  ngOnInit() {
    
  }

    onclick()
    {
      this.service.postLoggedinUser(this.user).subscribe();
    }
}
