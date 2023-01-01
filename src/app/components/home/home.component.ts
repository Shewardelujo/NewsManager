import { Component, OnInit } from '@angular/core';
import { dData } from 'src/app/dummydata/ddata';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  category = 'bitcoin';
  firstData!: any;
  scienceData!: any;
  bitData!: any;
  technologyData!: any;
  businessData!: any;
  sportsData!: any;
  entertainmentData!: any;
  healthData!: any;
  Data!: any;
  readLaterList!: dData[];

  totalList: any = [];

  constructor(
    private api: NewsApiService,
    private apiState: NewsApiStateService
  ) {}

  ngOnInit(): void {
    // if (localStorage.getItem('totalList') == null) {
    localStorage.setItem('totalList', JSON.stringify([]));
    // }

    if (localStorage.getItem('readLaterList') == null) {
      localStorage.setItem('readLaterList', JSON.stringify([]));
    }

    //TOP HEADLINES
    // this.apiState.getTopHeadlines.subscribe((res) => {
    //   console.log('res', res);
    //   this.Data = res;
    // localStorage.setItem('totalList', JSON.stringify(this.Data));

    //   console.log('this.Data', this.Data);
    // });

    //TOP HEADLINES;
    this.api.topHeadlines().subscribe((data) => {
      this.firstData = data.articles[0];
      this.Data = data.articles.slice(1, 4);
      this.apiState.setTopHeadlines(data.articles);

      const totalList = localStorage.getItem('totalList');
      if (totalList != null) {
        const list = JSON.parse(totalList);
        let updatedTotalList = [...list, ...data.articles];
        localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
      }

      console.log(data.articles);
    });

    //BITCOIN
    this.api.search(this.category).subscribe((data) => {
      this.bitData = data.articles.slice(0, 3);
      const totalList = localStorage.getItem('totalList');
      if (totalList != null) {
        const list = JSON.parse(totalList);
        let updatedTotalList = [...list, ...data.articles];
        localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
      }
    });

    //SCIENCE
    this.api.category('science').subscribe((data) => {
      this.scienceData = data.articles.slice(0, 3);
      const totalList = localStorage.getItem('totalList');
      if (totalList != null) {
        const list = JSON.parse(totalList);
        let updatedTotalList = [...list, ...data.articles];
        localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
      }
      this.apiState.setScienceDataList(data.articles);
    });

    //TEC
    this.api.category('technology').subscribe((data) => {
      this.technologyData = data.articles.slice(0, 3);
      const totalList = localStorage.getItem('totalList');
      if (totalList != null) {
        const list = JSON.parse(totalList);
        let updatedTotalList = [...list, ...data.articles];
        localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
      }
      this.apiState.setTechnologyDataList(data.articles);
    });

    //BUSINESS
    this.api.category('business').subscribe((data) => {
      this.businessData = data.articles.slice(0, 3);
      const totalList = localStorage.getItem('totalList');
      if (totalList != null) {
        const list = JSON.parse(totalList);
        let updatedTotalList = [...list, ...data.articles];
        localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
      }
      this.apiState.setBusinessDataList(data.articles);
    });

    //SPORTS
    this.api.category('sports').subscribe((data) => {
      this.sportsData = data.articles.slice(0, 3);
      const totalList = localStorage.getItem('totalList');
      if (totalList != null) {
        const list = JSON.parse(totalList);
        let updatedTotalList = [...list, ...data.articles];
        localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
      }
      this.apiState.setSportsDataList(data.articles);
    });

    //ENTERTAINMENT
    this.api.category('entertainment').subscribe((data) => {
      this.entertainmentData = data.articles.slice(0, 3);
      const totalList = localStorage.getItem('totalList');
      if (totalList != null) {
        const list = JSON.parse(totalList);
        let updatedTotalList = [...list, ...data.articles];
        localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
      }
      this.apiState.setEntertainmentDataList(data.articles);
    });

    //HEALTH
    this.api.category('health').subscribe((data) => {
      this.healthData = data.articles.slice(0, 3);
      const totalList = localStorage.getItem('totalList');
      if (totalList != null) {
        const list = JSON.parse(totalList);
        let updatedTotalList = [...list, ...data.articles];
        localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
      }
      this.apiState.setHealthDataList(data.articles);
    });
  }

  storeNews(item: dData) {
    console.log('item', item);
    this.apiState.getReadLater.subscribe((res) => {
      this.readLaterList = res;
      console.log('res', res);
    });
    const preExistingReadL = this.readLaterList.find(
      (readL) => readL.title === item.title
    );

    if (preExistingReadL == undefined) {
      this.readLaterList = [...this.readLaterList, item];
    }
    this.apiState.setReadLater(this.readLaterList);
  }
}