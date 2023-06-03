import { Component } from '@angular/core';
import { HomeService } from '../../shared/home.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {

  newNetworkLogo = './assets/params/images/logo/news-network-logo.jpg';
  articles: any;
  locationData: any;
  currencyData: any;
  searched = false;
  searchedData: any;
  newsCategory = 'health';
  title = 'Health';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    const cachedArticles = sessionStorage.getItem('savedHealthArticles') || null;
    if(cachedArticles) {
      this.articles = JSON.parse(cachedArticles);
    } else {
      setTimeout(() => {
      const localLocation = sessionStorage.getItem('localLocation') || null;
      if(localLocation) {
      this.locationData = JSON.parse(localLocation);
      this.getNewsArticles();
    }
      },500)
      
    }
  }

  getNewsArticles() {
    if(this.locationData) {
    this.homeService.getNewsApiOrg(this.newsCategory, this.locationData.country_code2).subscribe({
      next: response => {
          if(response) {
            this.articles = response;
            sessionStorage.setItem('savedHealthArticles', JSON.stringify(this.articles));
          }     
      },
      error: err => {
        console.log('Error: ', err);
      }
    })
    }
  }

  search(queryTxt: string) {
    this.searched = true;
    const querytxt = queryTxt.split(' ').join('+')
    console.log(querytxt);
    this.homeService.serachNewsArticles(querytxt).subscribe({
      next: response => {
        if(response) this.searchedData = response;
      },
      error: err => {
        console.log('Error: ', err);
      }
    })
  }

  clearSearch(searchTxt: any) {
    searchTxt.value = '';
    this.searched = false;
  }

}
