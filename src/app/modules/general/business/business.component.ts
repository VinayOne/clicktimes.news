import { Component } from '@angular/core';
import { HomeService } from '../../shared/home.service';
import { LocalstorageService } from '../../shared/localstrorage.service';
import { environment } from 'src/environments/environment';
import { SeoService } from '../../shared/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { switchMap } from 'rxjs';

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
  currentDate = new Date();

  constructor(
    private homeService: HomeService, 
    private localStorage: LocalstorageService, 
    private seoService: SeoService,
    private pageTitle: Title,
    private meta: Meta
    ) { }

  ngOnInit(): void {  
    this.updateSeoProperties();  
    const cachedArticles = this.localStorage.getItem('savedBusinessArticles') || '';
    if(cachedArticles) {
      const parsedData = JSON.parse(cachedArticles);
      const savedTime = parsedData?.time;
      const timeDiff = this.getTimeDiff(savedTime);
      if(timeDiff <= 4) {
        this.articles = parsedData.news;
      } else {
        this.getNewsArticles();
      }      
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
    this.homeService.getGeoLocation().pipe(
      switchMap((response) => {
        visitorCountry = response;
        return this.homeService.getNewsApiOrg(this.newsCategory, visitorCountry.country_code2);
      })
    ).subscribe({
      next: response => {
        if (response) {
          this.articles = response;
          this.localStorage.setItem('savedBusinessArticles', JSON.stringify({ news: this.articles, time: this.currentDate }));
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

  getTimeDiff(savedTime: any) {
    const savedTimeValue = new Date(savedTime);
    const diff = Math.abs(this.currentDate.getTime() - savedTimeValue.getTime()) / 3600000;
    return diff;
  }

}
