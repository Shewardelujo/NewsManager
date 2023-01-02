import { dData } from 'src/app/dummydata/ddata';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiStateService {
  //declared the variable and gave it a type behaviorSubject
  public topHeadline!: BehaviorSubject<dData[]>;
  public scienceData!: BehaviorSubject<dData[]>;
  public bitData!: BehaviorSubject<dData[]>;
  public technologyData!: BehaviorSubject<dData[]>;
  public businessData!: BehaviorSubject<dData[]>;
  public sportsData!: BehaviorSubject<dData[]>;
  public entertainmentData!: BehaviorSubject<dData[]>;
  public healthData!: BehaviorSubject<dData[]>;
  public readLater!: BehaviorSubject<dData[]>;
  public searchResults!: BehaviorSubject<dData[]>;

  readLaterList!: dData[];

  constructor() {
    const storedNews = localStorage.getItem('readLaterList');
    if (storedNews != null) {
      const list = JSON.parse(storedNews);
      console.log(list);
      this.readLaterList = list;
    } else {
      localStorage.setItem('readLaterList', JSON.stringify([]));
    }
    // CREATE A NEW BEHAVIOR SUBJECT WITH AN INITIAL TODO

    this.topHeadline = new BehaviorSubject<dData[]>([]);

    this.scienceData = new BehaviorSubject<dData[]>([]);
    this.bitData = new BehaviorSubject<dData[]>([]);
    this.technologyData = new BehaviorSubject<dData[]>([]);
    this.businessData = new BehaviorSubject<dData[]>([]);
    this.sportsData = new BehaviorSubject<dData[]>([]);
    this.entertainmentData = new BehaviorSubject<dData[]>([]);
    this.healthData = new BehaviorSubject<dData[]>([]);
    this.searchResults = new BehaviorSubject<dData[]>([]);

    this.readLater = new BehaviorSubject<dData[]>(this.readLaterList || []);
  }

  get getReadLater(): Observable<dData[]> {
    return this.readLater.asObservable();
  }

  setReadLater(readLater: dData[]) {
    this.readLater.next(readLater);
    localStorage.setItem('readLaterList', JSON.stringify(readLater));
  }

  get getTopHeadlines(): Observable<dData[]> {
    return this.topHeadline.asObservable();
  }

  setTopHeadlines(topHeadline: dData[]) {
    this.topHeadline.next(topHeadline);
  }
  get getScienceDataList(): Observable<dData[]> {
    return this.scienceData.asObservable();
  }

  setScienceDataList(scienceData: dData[]) {
    this.scienceData.next(scienceData);
  }
  get getBitDataList(): Observable<dData[]> {
    return this.bitData.asObservable();
  }

  setBitDataList(bitData: dData[]) {
    this.bitData.next(bitData);
  }
  get getTechnologyDataList(): Observable<dData[]> {
    return this.technologyData.asObservable();
  }

  setTechnologyDataList(technologyData: dData[]) {
    this.technologyData.next(technologyData);
  }
  get getBusinessDataList(): Observable<dData[]> {
    return this.businessData.asObservable();
  }

  setBusinessDataList(businessData: dData[]) {
    this.businessData.next(businessData);
  }
  get getSportsDataList(): Observable<dData[]> {
    return this.sportsData.asObservable();
  }

  setSportsDataList(sportsData: dData[]) {
    this.sportsData.next(sportsData);
  }
  get getEntertainmentDataList(): Observable<dData[]> {
    return this.entertainmentData.asObservable();
  }

  setEntertainmentDataList(entertainmentData: dData[]) {
    this.entertainmentData.next(entertainmentData);
  }
  get getHealthDataList(): Observable<dData[]> {
    return this.healthData.asObservable();
  }

  setHealthDataList(healthData: dData[]) {
    this.healthData.next(healthData);
  }
  get getSearchResults(): Observable<dData[]> {
    return this.searchResults.asObservable();
  }

  setSearchResults(searchResults: dData[]) {
    this.searchResults.next(searchResults);
  }
}
