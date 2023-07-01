import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { HomeService } from './modules/shared/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  static isBrowser = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: any, private homeService: HomeService) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
   }

  ngOnInit(): void {
    this.homeService.getGeoLocation();
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