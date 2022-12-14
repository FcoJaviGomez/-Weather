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
    for (let i = 0; i < this.favoriteCities.length; i++) {
      if (this.favoriteCities[i].id == city.id) {
        found = true
        break
      }
    }
    if (!found) {
      this.favoriteCities.push(city)
    }
  }
  delete(city: any) {
    for (let i = 0; i < this.favoriteCities.length; i++) {
      if (this.favoriteCities[i].id == city.id) {
        this.favoriteCities.splice(i, 1)
        break
      }
    }
  }
}
