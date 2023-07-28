import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherSearchComponent } from '../components';
import { WeatherCardComponent } from '../components/weather-card/weather-card.component';
import { WeatherFacade } from '../state';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-weather-layout',
  standalone: true,
  imports: [CommonModule,WeatherSearchComponent,WeatherCardComponent,MatProgressSpinnerModule],
  templateUrl: './weather-layout.component.html',
  styleUrls: ['./weather-layout.component.scss']
})
export class WeatherLayoutComponent {

  weatherFacade = inject(WeatherFacade);
  weatherData$=this.weatherFacade.weatherData$;
  loaded$=this.weatherFacade.loaded$;
  isLoading$=this.weatherFacade.loading$;

}
