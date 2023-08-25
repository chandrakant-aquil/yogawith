import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yoga With Harsh';
  ngOnInit() {
    AOS.init({
      startEvent: 'load',
      duration: 700,
      offset:50,
      //once: true,
      mirror:false,
   });
  }
}
