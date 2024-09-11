import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../app/services/weather.service';
import { WeatherData } from '../../app/weather.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule,],  // Include HttpClientModule here
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  cityName: string = '';
  weatherData: WeatherData | null = null;

  constructor(private weatherService: WeatherService) {}

  onSubmit() {
    if (this.cityName) {
      this.weatherService.getWeatherData(this.cityName).subscribe(
        data => this.weatherData = data,
        error => console.error('Error fetching weather data', error)
      );
    }
  }
}
