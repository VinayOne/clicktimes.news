import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HomeService } from '../../shared/home.service';
import { LocalstorageService } from '../../shared/localstrorage.service';
import { SeoService } from '../../shared/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent {

  newNetworkLogo = './assets/params/images/logo/click-times-logo.jpg';
  articles: any;
  currencyData: any;
  searched = false;
  searchedData: any;
  newsCategory = 'general';
  title = 'Disclaimer';
  searchBusy = false;
  hostName = environment.application.url;
  currentDate = new Date();

  constructor(
    private homeService: HomeService,
    private localStorage: LocalstorageService,
    private seoService: SeoService,
    private meta: Meta,
    private pageTitle: Title
  ) { }

  ngOnInit(): void {
    this.seoService.updateCanonicalUrl(`${this.hostName}`);
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

}
