import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  constructor(private http: HttpClient) {}

  //  topHeadlinesUrl

  topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${environment.apiKey}`;

  //baseUrl
  baseUrl = `https://newsapi.org/v2/`;

  //  categoryUrl
  apiKey = `&apiKey=${environment.apiKey}`;
  categoryUrl = this.baseUrl + 'top-headlines';

  //topHeadlines()
  topHeadlines() {
    return this.http.get<any>(this.topHeadlinesUrl);
  }

  //category()
  category(query: string) {
    return this.http.get<any>(
      this.categoryUrl + `?category=${query}` + this.apiKey
    );
  }

  //search
  search(query: string) {
    return this.http.get<any>(
      this.baseUrl + `everything?q=${query}` + this.apiKey
    );
  }
}
