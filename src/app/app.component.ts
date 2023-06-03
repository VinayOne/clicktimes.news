import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeService } from './modules/shared/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  locationData: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object, private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.fetchUserLocation();

    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }
  }
  
  
  fetchUserLocation() {
    this.homeService.getGeoLocation().subscribe({
      next: response => {
        if(response) {
          this.locationData = response;
          sessionStorage.setItem('localLocation', JSON.stringify(this.locationData));
        }
      }, 
      error: err => {
        console.log('Error: ', err);
      }
    })
  }

}