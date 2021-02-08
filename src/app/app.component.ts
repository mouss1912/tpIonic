import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Trailers', url: '/home/trailers', icon: 'film' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Favoris', url: '/favoris', icon: 'heart' },
    { title: 'Préferences', url: 'preference', icon: 'aperture' },
  ];
  constructor() {}
}
