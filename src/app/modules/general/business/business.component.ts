import { Component } from '@angular/core';
import { HomeService } from '../../shared/home.service';
import { LocalstorageService } from '../../shared/localstrorage.service';
import { environment } from 'src/environments/environment';
import { SeoService } from '../../shared/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {

  newNetworkLogo = './assets/params/images/logo/news-network-logo.jpg';
  articles: any;
  currencyData: any;
  searched = false;
  searchedData: any;
  newsCategory = 'business';
  title = 'Business';
  searchBusy = false;
  hostName = environment.application.url;

  constructor(
    private homeService: HomeService, 
    private localStorage: LocalstorageService, 
    private seoService: SeoService,
    private pageTitle: Title,
    private meta: Meta
    ) { }

  ngOnInit(): void {  
    this.updateSeoProperties();  
    const cachedArticles = this.localStorage.getItem('savedBusinessArticles') || null;
    if (cachedArticles) {
      this.articles = JSON.parse(cachedArticles);
    } else {
      this.getNewsArticles();
    }
  }

  updateSeoProperties() {
    this.seoService.updateCanonicalUrl(`${this.hostName}/business`);
    this.pageTitle.setTitle('Click Times News - Top Headlines | Business')
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
                this.localStorage.setItem('savedBusinessArticles', JSON.stringify(this.articles));
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
        if (response) {
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
