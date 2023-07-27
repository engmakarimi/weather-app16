import { MatButtonModule } from '@angular/material/button';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { WeatherFacade } from '../../state';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-weather-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent {
  weatherFacade = inject(WeatherFacade);
  searchTermControl = new FormControl('');
  searchTerm$ = this.weatherFacade.searchTerm$;

  ngOnInit() {
    this.searchTermControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((p) => {
        if (p) this.weatherFacade.setSearchTerm(p);
      });
  }

  onSearchClick() {
    this.weatherFacade.executeSearch();
  }
  clearSearch() {
    this.weatherFacade.resetSearch();
  }
}
