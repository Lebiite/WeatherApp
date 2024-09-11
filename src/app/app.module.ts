import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherComponent } from '../components/weather/weather.component';
import { WeatherService } from './services/weather.service';
 // Adjust path if necessary

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    WeatherComponent,
    BrowserModule,
  // Ensure HttpClientModule is imported here
    FormsModule
  ],
  providers: [ provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
