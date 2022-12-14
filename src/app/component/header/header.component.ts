import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public user: UserService, public router: Router) {
  }

  signOff() {
    this.user.userLogged = false
    this.router.navigate(['/'])
  }

}
