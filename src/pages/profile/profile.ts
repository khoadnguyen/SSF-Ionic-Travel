import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private photoLibrary: PhotoLibrary) {
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("Response:", resp);
      console.log("Response:", resp.coords.longitude);
      console.log("Respo  nse:", resp.coords.latitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    })};

    editPhoto() {
    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          library.forEach(function(libraryItem) {
            console.log(libraryItem.id);          // ID of the photo
            console.log(libraryItem.photoURL);    // Cross-platform access to photo
            console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            console.log(libraryItem.fileName);
            console.log(libraryItem.width);
            console.log(libraryItem.height);
            console.log(libraryItem.creationDate);
            console.log(libraryItem.latitude);
            console.log(libraryItem.longitude);
            console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
          });
        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    })
      .catch(err => console.log('permissions weren\'t granted'));
  }

}
