import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Feature } from './feature';
import { HomeService } from './home.service';

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
  latestTrends: any;
  currencyData: any;
  searched = false;
  searchedData: any;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.fetchUserLocation();
    setTimeout(() => {
      this.getNewsArticles();
      this.getGoogleLatestTrends();
      //this.getCurrency();
    }, 1000);
  }

  getNewsArticles() {
    if(this.locationData) {
    this.homeService.getNewsApiOrg(this.locationData.country_code2).subscribe({
      next: response => {
          if(response) this.articles = response;       
      },
      error: err => {
        console.log('Error: ', err);
      }
    })
    }    
  }

  fetchUserLocation() {
    this.homeService.getGeoLocation().subscribe({
      next: response => {
        if(response) this.locationData = response;
      }, 
      error: err => {
        console.log('Error: ', err);
      }
    })
  }

  getGoogleLatestTrends() {
    let result: any;
    this.homeService.getGoogleTrends(this.locationData.country_code2).subscribe({
      next: response => {
        if(response) {
          result = response;
          result.data.items.forEach( (obj: any) => this.renameKey( obj, 'ht:picture', 'ht_picture' ) );
          result.data.items.forEach( (obj: any) => this.renameKey( obj, 'ht:news_item', 'ht_news_item' ) );
          result.data.items.forEach( (obj: any) => this.renameKey( obj.ht_news_item, 'ht:news_item_snippet', 'ht_news_item_snippet' ) );
          result.data.items.forEach( (obj: any) => this.renameKey( obj.ht_news_item, 'ht:news_item_url', 'ht_news_item_url' ) );
          let updatedJson =  result;
          this.latestTrends = updatedJson;
        }
      },
      error: err => {
        console.log('Error: ', err);
      }
    })
  }

  renameKey ( obj:any, oldKey:string, newKey:string ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
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

}
