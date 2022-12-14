import { Component } from '@angular/core';
import { CityService } from 'src/app/service/city.service';
import { UserService } from 'src/app/service/user.service';
import { WeatherService } from 'src/app/service/weather.service';
import cities from 'src/assets/json/cities.json'

@Component({
  selector: 'app-home-logged',
  templateUrl: './home-logged.component.html',
  styleUrls: ['./home-logged.component.css']
})
export class HomeLoggedComponent {

  cities: any = cities

  public selectCity: any | undefined

  title = 'gmaps'
  position: any
  label = {
    color: 'red',
    text: 'Marker'
  }

  constructor(public weatherService: WeatherService, public cityService: CityService, public userService: UserService) {
    this.selectCity = undefined
  }

  get favoriteCities() {
    return this.userService.user.favoriteCities;
  }


  getCity(id: any) {
    this.weatherService.getOne(id).subscribe((data: any) => {
      this.cityService.add(data)
    })
  }

  delete(city: any) {
    this.cityService.delete(city)
  }

  getSelectCity(id: any) {
    this.weatherService.getOne(id).subscribe((data: any) => {
      this.selectCity = data
      this.position = {
        lat: data.coord.lat,
        lng: data.coord.lon
      }
    })
  }
}
