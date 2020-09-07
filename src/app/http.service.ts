import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }
  citySearch(inputValue){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=83b93fb0b1a75bb0f67c22e5146579f6');
  }
}
