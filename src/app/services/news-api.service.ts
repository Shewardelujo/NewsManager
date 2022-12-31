import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { dData } from '../dummydata/ddata';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  // public topHeadline!: BehaviorSubject<dData[]>;

  constructor(private http: HttpClient) {
    // this.topHeadline = new BehaviorSubject<dData[]>([]);
  }

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

  // get getTopHeadlines(): Observable<dData[]> {
  //   return this.topHeadline.asObservable();
  // }
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
