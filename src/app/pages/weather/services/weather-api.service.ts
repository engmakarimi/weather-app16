import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {

  httpClient=inject(HttpClient)
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;


  getWeather(city: string='London') {

    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.httpClient.get(url);
  }
}
