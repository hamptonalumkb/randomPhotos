import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private http: HttpClient) {}

  public getPhoto() {
    return this.http.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: 'uhtKBNbC_-ZXdtfLgkF0Wi8dZ-FfpC1tX0i2gNs9VAY',
      },
    });
  }
}
