import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

// Chamando o slides
register();

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor() {}

  slideOpts = {
    initialSlide: 1,
    speed: 800,
  };

}
