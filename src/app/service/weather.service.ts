import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = "http://api.openweathermap.org/data/2.5/weather?id="


  constructor(private http: HttpClient) { }


  getOne(id: string): Observable<Object> {
    return this.http.get(this.url + `${id}&appid=5b4a5fb7fff1a8f5a3c0cd68dc4e9a5b `)
  }

}
