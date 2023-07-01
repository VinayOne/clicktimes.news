import { Component } from '@angular/core';
import { HomeService } from '../../shared/home.service';
import { LocalstorageService } from '../../shared/localstrorage.service';
import { environment } from 'src/environments/environment';
import { SeoService } from '../../shared/seo.service';
import { Title } from '@angular/platform-browser';

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
  hostName = environment.application.url;

  constructor(private homeService: HomeService, private localStorage: LocalstorageService, private seoService: SeoService, private pageTitle: Title) { }

  ngOnInit(): void {
    this.updateSeoProperties();
    const cachedArticles = this.localStorage.getItem('savedTecArticles') || null;
    if(cachedArticles) {
      this.articles = JSON.parse(cachedArticles);
    } else {
      this.getNewsArticles();      
    }
  }

  updateSeoProperties() {
    this.seoService.updateCanonicalUrl(`${this.hostName}/technology`);
    this.pageTitle.setTitle('Click Times News - Top Headlines | Technology')
  }

  getNewsArticles() {
    let visitorCountry: any;
    this.homeService.getGeoLocation().subscribe({
      next: response => {
        if (response) {
          visitorCountry = response;
          this.homeService.getNewsApiOrg(this.newsCategory, visitorCountry.country_code2).subscribe({
            next: response => {
              if (response) {
                this.articles = response;
                this.localStorage.setItem('savedTecArticles', JSON.stringify(this.articles));
              }
            },
            error: err => {
              console.log('Error: ', err);
            }
          });
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
