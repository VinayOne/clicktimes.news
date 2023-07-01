import { Component } from '@angular/core';
import { HomeService } from '../../shared/home.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {

  newNetworkLogo = './assets/params/images/logo/news-network-logo.jpg';
  articles: any;
  currencyData: any;
  searched = false;
  searchedData: any;
  newsCategory = 'sports';
  title = 'Sports';
  searchBusy = false;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    const cachedArticles = sessionStorage.getItem('savedSportsArticles') || null;
    if(cachedArticles) {
      this.articles = JSON.parse(cachedArticles);
    } else {
      this.getNewsArticles();      
    }
  }

  getNewsArticles() {
    this.homeService.getNewsApiOrg(this.newsCategory).subscribe({
      next: response => {
          if(response) {
            this.articles = response;
            sessionStorage.setItem('savedSportsArticles', JSON.stringify(this.articles));
          }       
      },
      error: err => {
        console.log('Error: ', err);
      }
    })
  }

  search(queryTxt: string) {
    this.searched = true;
    this.searchBusy = true;
    const querytxt = queryTxt.split(' ').join('+');
    this.homeService.serachNewsArticles(querytxt).subscribe({
      next: response => {
        if(response) {
          this.searchedData = response;
          this.searchBusy = false;
        }
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
