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

  // constructor(
  //   @Inject(PLATFORM_ID) private platformId: object, private homeService: HomeService) {
  // }

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
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


}