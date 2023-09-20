import { Component } from '@angular/core';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent {
  photoUrl: string = '';
  description: string = '';

  constructor(private photosService: UnsplashService) {
   this.fetchPhoto();
  }

  onClick(){
    this.fetchPhoto();
  }

  fetchPhoto(){
    this.photosService.getPhoto().subscribe( (response) => {
      this.photoUrl = response.urls.regular;
      this.description = response.alt_description;
    } )
  }
}
