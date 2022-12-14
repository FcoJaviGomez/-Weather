import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  public favoriteCities: any[] = []

  constructor(public userService: UserService) {
  }

  add(city: any) {
    console.log(city.id);
    let found = false
    for (let i = 0; i < this.userService.user.favoriteCities.length; i++) {
      if (this.userService.user.favoriteCities[i].id == city.id) {
        found = true
        break
      }
    }
    if (!found) {
      this.userService.user.favoriteCities.push(city)
    }
  }
  delete(city: any) {
    for (let i = 0; i < this.userService.user.favoriteCities.length; i++) {
      if (this.userService.user.favoriteCities[i].id == city.id) {
        this.userService.user.favoriteCities.splice(i, 1)
        break
      }
    }
  }
}
