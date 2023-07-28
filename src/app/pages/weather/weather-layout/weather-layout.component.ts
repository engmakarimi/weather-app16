import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherApiService } from '../services';
import { WeatherSearchComponent } from '../components';
import { WeatherCardComponent } from '../components/weather-card/weather-card.component';

@Component({
  selector: 'app-weather-layout',
  standalone: true,
  imports: [CommonModule,WeatherSearchComponent,WeatherCardComponent],
  templateUrl: './weather-layout.component.html',
  styleUrls: ['./weather-layout.component.scss']
})
export class WeatherLayoutComponent {
   weatherApi = inject(WeatherApiService)

   ngOnInit(){
    this.weatherApi.getWeather().subscribe(
      (p:any) => console.log(p)
    )
   }
   throwTestError(): void {
    throw new Error("Sentry Test Error");
  }
}
