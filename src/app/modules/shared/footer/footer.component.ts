import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  footerUrl = 'https://www.clicktimes.news/';
  footerLink = 'www.clicktimes.news';

  backToTop() {
    setTimeout(() => {
      window.scrollTo(0,0);
    }, 300)
  }

}
