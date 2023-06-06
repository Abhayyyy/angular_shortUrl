import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-urlform',
  templateUrl: './urlform.component.html',
  styleUrls: ['./urlform.component.css']
})
export class URLFormComponent {
  originalURL = "";
  shortURL = "";

  constructor(private http: HttpClient) {}
  
  generateShortURL() {
    this.http.post<any>('https://competent-wildflower-99473.pktriot.net/api/shorten', { originalURL: this.originalURL })
      .subscribe(response => {
        this.shortURL = response.shortURL;
      }, error => {
        console.log(error);
      });
  }
}
