import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlMappingService {
  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  shortenUrl(originalUrl: string): Observable<any> {
    const url = `${this.baseUrl}/api/shorten`;
    return this.http.post<any>(url, { originalUrl });
  }

  getOriginalUrl(shortCode: string): Observable<any> {
    const url = `${this.baseUrl}/api/original/${shortCode}`; 
    return this.http.get<any>(url);
  }

  getAllUrlMappings(): Observable<any> {
    const url = `${this.baseUrl}/api/urlmappings`; 
    return this.http.get<any>(url);
  }

  redirect(shortCode: string): Observable<any> {
    const url = `${this.baseUrl}/api/redirect/${shortCode}`;
    return this.http.get<any>(url);
  }
}
