import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=pexels-sagui-andrea-618833.jpg&fm=jpg';
  image2 = 'https://fanatics.frgimages.com/st-louis-cardinals/st-louis-cardinals-12-x-12-baseball-sign_pi3475000_ff_3475027-7c1fcf763a423f2c86fe_full.jpg?_hv=2&w=900';
  image3 = 'https://www.iregistertrademarks.com/wp-content/uploads/large-1.png';

  constructor() { }

  ngOnInit() {
  }

}