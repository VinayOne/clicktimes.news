import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HomeService } from '../../shared/home.service';
import { LocalstorageService } from '../../shared/localstrorage.service';
import { SeoService } from '../../shared/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newNetworkLogo = './assets/params/images/logo/news-network-logo.jpg';
  articles: any;
  currencyData: any;
  searched = false;
  searchedData: any;
  newsCategory = 'general';
  title = 'Top Headlines';
  searchBusy = false;
  hostName = environment.application.url;
  currentDate = new Date();

  constructor (
  private homeService: HomeService, 
  private localStorage: LocalstorageService, 
  private seoService: SeoService,
  private meta: Meta,
  private pageTitle: Title
  ) { }

  ngOnInit(): void {
    this.seoService.updateCanonicalUrl(`${this.hostName}`);
    const cachedArticles = this.localStorage.getItem('savedArticles') || '';    
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
                this.localStorage.setItem('savedArticles', JSON.stringify({news: this.articles, time: this.currentDate}));
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

  getCurrency() {
    let currency: any = [];
    let sortcurrency: any;
    this.homeService.getLatestCurrencyValue().subscribe({
      next: response => {
        if (response) {
          //const {data.INR} = response || {}
          currency.push(response);
          for (const i of currency) {
            console.log(currency.data[i])
          }
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
        console.log('respnse: ', response);
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
