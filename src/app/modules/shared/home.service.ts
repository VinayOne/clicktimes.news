import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

 getGeoLocation() {
    return this.http.get('https://api.ipgeolocation.io/ipgeo?apiKey=f620de073d29432194a9841daed4b538');
  }

  getNewsData(country_code: string) {
    return this.http.get(`https://newsdata.io/api/1/news?apikey=pub_22872da7e3e122d7aa03c0f0aaae2a8e808b9&country=${country_code}`);
  }

  getNewsApiOrg(category: string, country_code: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country_code}&category=${category}&apiKey=c4690557cb694d7190d307c5cabf36e0`);
  }

  getGoogleTrends(country_code: string) {
    return this.http.get(`${environment.application.apiUrl}/trending/${country_code}`);
  }

  getLatestCurrencyValue() {
    return this.http.get(`https://api.freecurrencyapi.com/v1/latest?apikey=uWl7dMvWDIehJcVy6MIpO9dW5XAlhLP3lDeMyUnz`);
  }

  serachNewsArticles(querytext: string) {
    return this.http.get(`https://newsapi.org/v2/everything?q=${querytext}&apiKey=c4690557cb694d7190d307c5cabf36e0`);
  }

}