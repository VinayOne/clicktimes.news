import { Component } from '@angular/core';
import { HomeService } from '../../shared/home.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  newNetworkLogo = './assets/params/images/logo/news-network-logo.jpg';
  articles: any;
  currencyData: any;
  searched = false;
  searchedData: any;
  newsCategory = 'technology';
  title = 'Technology';
  searchBusy = false;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    const cachedArticles = sessionStorage.getItem('savedTecArticles') || null;
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
            sessionStorage.setItem('savedTecArticles', JSON.stringify(this.articles));
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
