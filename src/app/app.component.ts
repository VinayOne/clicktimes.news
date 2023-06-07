import { Component, OnInit } from '@angular/core';
// import { Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
import { HomeService } from './modules/shared/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  locationData: any; //= {"ip":"2401:4900:62f7:f965:2035:70c5:3a2d:3f06","continent_code":"AS","continent_name":"Asia","country_code2":"IN","country_code3":"IND","country_name":"India","country_capital":"New Delhi","state_prov":"Haryana","state_code":"IN-HR","district":"","city":"Gurugram","zipcode":"122003","latitude":"28.44324","longitude":"77.05501","is_eu":false,"calling_code":"+91","country_tld":".in","languages":"en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc","country_flag":"https://ipgeolocation.io/static/flags/in_64.png","geoname_id":9148991,"isp":"Bharti Airtel Limited","connection_type":"","organization":"","currency":{"code":"INR","name":"Indian Rupee","symbol":"₹"},"time_zone":{"name":"Asia/Kolkata","offset":5.5,"current_time":"2023-06-04 19:57:14.643+0530","current_time_unix":1685888834.643,"is_dst":false,"dst_savings":0}};

  // constructor(
  //   @Inject(PLATFORM_ID) private platformId: object, private homeService: HomeService) {
  // }

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    //sessionStorage.setItem('localLocation', JSON.stringify(this.locationData));
    this.fetchUserLocation();

    // if (isPlatformBrowser(this.platformId)) {
    //   const navMain = document.getElementById('navbarCollapse');
    //   if (navMain) {
    //     navMain.onclick = function onClick() {
    //       if (navMain) {
    //         navMain.classList.remove("show");
    //       }
    //     }
    //   }
    // }
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