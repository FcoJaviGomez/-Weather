import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [new User("javiergomez742@gmail.com", "1234", "Admin"),
  new User("hpecds@gmail.com", "314", "Admin")]

  public user: User;
  public userLogged: boolean

  constructor() {
    this.user = new User("", "", "")
    this.userLogged = false
  }

  getRole(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == user.email && this.users[i].password == user.password) {
        this.user = this.users[i]
        this.userLogged = true
        return this.user.role
      }
    }
    return "No Admin"
  }
}
