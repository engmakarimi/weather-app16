import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { map } from 'rxjs';
import { Weather } from '../type';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {

  httpClient=inject(HttpClient)
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  //.pipe(map((data:any) => ({weather: data}):Observable<{weather:any}>
  getWeather(city: string) {
    /**
     * units=metric ==> return temperature is in Celsius;  
     */
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.httpClient.get(url).pipe(map((value:any) => (new Weather(value)))) 
   
  }
}
