import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '2d0898d518msh4264d2009a2b14fp16d7cdjsndbc63b10fa43',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com' 
});
const headerOptions = { headers: headers };

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

 getGeoLocation() {
   return this.http.get('https://api.ipgeolocation.io/ipgeo?apiKey=f620de073d29432194a9841daed4b538');
  };


  getNewsData(country_code: string) {
    return this.http.get(`https://newsdata.io/api/1/news?apikey=pub_22872da7e3e122d7aa03c0f0aaae2a8e808b9&country=${country_code}`);
  }

  getNewsApiOrg(category: string, country_code: string) {
    return this.http.get(`${environment.application.apiUrl}/newsapi/${category}/${country_code}`);
  }

  getGoogleTrends(country_code: string) {
    return this.http.get(`${environment.application.apiUrl}/trending/${country_code}`);
  }

  getLatestCurrencyValue() {
    return this.http.get(`https://api.freecurrencyapi.com/v1/latest?apikey=uWl7dMvWDIehJcVy6MIpO9dW5XAlhLP3lDeMyUnz`);
  }

  serachNewsArticles(queryText: string) {
    return this.http.get(`https://bing-news-search1.p.rapidapi.com/news/search?q=${queryText}&freshness=DAY&textFormat=RAW&safeSearch=Off&offset=0&count=30`, headerOptions);
  }

  sendMail(data: any) {
    return this.http.post(`${environment.application.apiUrl}/sendmail`, data);
  }

}