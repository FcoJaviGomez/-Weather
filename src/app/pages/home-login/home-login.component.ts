import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  public user: User
  public validation: any = ["", ""]

  constructor(public router: Router, public userService: UserService) {
    this.user = new User("", "", "")
  }

  login() {
    if (this.validate(this.user)) {
      if (this.userService.getRole(this.user) == 'Admin') {
        this.router.navigate(['home-logged'])
      }
    }
  }

  validate(user: User) {
    if (user.email == "" || user.password == "") {
      return false
    }
    return true
  }

  ngOnInit(): void {
  }
}
