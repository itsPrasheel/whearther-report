import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private _http: HttpService ) { }

  flag =  false;
  inputValue;
  onKey(event) {
    this.inputValue = event.target.value;
    // console.log(this.inputValue);
  }
  
  brews: Object;
  imageLink=null;

  citySearch(){
    this._http.citySearch(this.inputValue).subscribe(data => {
      this.brews = data
      // console.log(this.brews['weather'][0]);
      this.flag = true;
      this.imageLink=`http://openweathermap.org/img/wn/${this.brews['weather'][0]['icon']}@2x.png`;
      console.log(this.imageLink)
    });
  }
}
