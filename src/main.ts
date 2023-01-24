import './polyfills';
import {bootstrapApplication} from '@angular/platform-browser';
import {NgbdCarouselPause} from './app/carousel-pause';

bootstrapApplication(NgbdCarouselPause)
.then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
})
.catch(err => console.error(err));
