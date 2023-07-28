import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Weather } from '../../type';
import { DescriptionComponent } from 'src/app/shared';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule,DescriptionComponent],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
 @Input() weatherData:Weather | null=null
}
