import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../weather.module';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const headers = {
      'x-rapidapi-key': enviroment.weatherApiKey,
      'x-rapidapi-host': enviroment.host
    } // Assuming your API key should be included here

    return this.http.get<WeatherData>(`${enviroment.weatherApiBaseUrl}${cityName}/EN`, {
      headers: headers
    });
  }
}
