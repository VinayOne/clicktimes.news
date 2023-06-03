import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HomeService } from '../../shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  name = environment.application.name;
  version = environment.application.version;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  newNetworkLogo = './assets/params/images/logo/news-network-logo.jpg';
  articles: any;
  locationData: any;
  currencyData: any;
  searched = false;
  searchedData: any;
  newsCategory = '';
  title = 'Top Headlines';
  searchBusy = false;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    const cachedArticles = sessionStorage.getItem('savedArticles') || null;
    if(cachedArticles) {
      this.articles = JSON.parse(cachedArticles);
    } else {
      setTimeout(() => {
        const localLocation = sessionStorage.getItem('localLocation') || null;
        if(localLocation) {
          this.locationData = JSON.parse(localLocation);
          this.getNewsArticles();          
        }        
      },700);
    }
  }

  getNewsArticles() {
    if(this.locationData) {
    this.homeService.getNewsApiOrg(this.newsCategory, this.locationData.country_code2).subscribe({
      next: response => {
          if(response) {
            this.articles = response;
            sessionStorage.setItem('savedArticles', JSON.stringify(this.articles));
          }   
      },
      error: err => {
        console.log('Error: ', err);
      }
    })
    }    
  }

  getCurrency() {
    let currency: any = [];
    let sortcurrency: any;
    this.homeService.getLatestCurrencyValue().subscribe({
      next: response => {
        if(response) {
          //const {data.INR} = response || {}
          currency.push(response);
          for(const i of currency) {
            console.log(currency.data[i])
          }
        }
        //console.log('Currency', this.currencyData);
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
