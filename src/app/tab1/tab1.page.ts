import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

// Chamando o slides
register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  slideOpts = {
    initialSlide: 1,
    speed: 800,
  };

}
