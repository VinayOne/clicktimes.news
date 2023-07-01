import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../shared/home.service';

@Component({
  selector: 'app-google-trends',
  templateUrl: './google-trends.component.html',
  styleUrls: ['./google-trends.component.css']
})
export class GoogleTrendsComponent implements OnInit {

  latestTrends: any;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    const googleTrends = sessionStorage.getItem('googleTrendsLocal') || null;
    if(googleTrends) {
      this.latestTrends = JSON.parse(googleTrends);
    } else {
      this.getGoogleLatestTrends();
    }
  }

  getGoogleLatestTrends() {
    let result: any;
    this.homeService.getGoogleTrends().subscribe({
      next: async response => {
        if (response) {
          result = await response;
          result.data.items.forEach(async (obj: any) => await this.renameKey(obj, 'ht:picture', 'ht_picture'));
          result.data.items.forEach(async (obj: any) => await this.renameKey(obj, 'ht:news_item', 'ht_news_item'));
          result.data.items.forEach(async (obj: any) => await this.renameKey(obj.ht_news_item, 'ht:news_item_snippet', 'ht_news_item_snippet'));
          result.data.items.forEach(async (obj: any) => await this.renameKey(obj.ht_news_item, 'ht:news_item_url', 'ht_news_item_url'));
          let updatedJson = await result;
          this.latestTrends = await updatedJson;
          sessionStorage.setItem('googleTrendsLocal', JSON.stringify(this.latestTrends));
        }
      },
      error: async err => {
        await console.log('Error: ', err);
      }
    })
  }

  renameKey(obj: any, oldKey: string, newKey: string) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

}