import { Component, OnInit } from '@angular/core';
import { dData } from 'src/app/dummydata/ddata';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';
import { NewsApiService } from 'src/app/services/news-api.service';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  btnText: string = 'Read Later';
  durationInSeconds = 5;
  category!: string;
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
  conditionalRender: string[] = [
    'Bitcoin',
    'Fashion',
    'Medical',
    'Football',
    'Celebrity',
    'Tourism',
    'Political',
    'Investigation',
    'Historical',
    'Trending',
  ];
  showDataSpinner = true;
  showBitSpinner = true;
  showScienceSpinner = true;
  showTechnologySpinner = true;
  showBusinessSpinner = true;
  showSportsSpinner = true;
  showEntertainmentSpinner = true;
  showHealthSpinner = true;

  constructor(
    private api: NewsApiService,
    private apiState: NewsApiStateService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    localStorage.setItem('totalList', JSON.stringify([]));

    if (localStorage.getItem('readLaterList') == null) {
      localStorage.setItem('readLaterList', JSON.stringify([]));
    }

    this.category =
      this.conditionalRender[
        Math.floor(Math.random() * this.conditionalRender.length)
      ];

    //TOP HEADLINES;
    this.api.topHeadlines().subscribe(
      (data) => {
        this.showDataSpinner = false;

        this.firstData = data.articles[0];
        this.Data = data.articles.slice(1, 4);
        this.apiState.setTopHeadlines(data.articles);

        const totalList = localStorage.getItem('totalList');
        if (totalList != null) {
          const list = JSON.parse(totalList);
          let updatedTotalList = [...list, ...data.articles];
          localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
        }
      },
      (err) => {
        this.showDataSpinner = false;
      }
    );

    //BITCOIN
    this.api.search(this.category).subscribe(
      (data) => {
        this.showBitSpinner = false;

        this.bitData = data.articles.slice(0, 3);
        const totalList = localStorage.getItem('totalList');
        if (totalList != null) {
          const list = JSON.parse(totalList);
          let updatedTotalList = [...list, ...data.articles];
          localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
        }
      },
      (err) => {
        this.showBitSpinner = false;
      }
    );

    //SCIENCE
    this.api.category('science').subscribe(
      (data) => {
        this.showScienceSpinner = false;

        this.scienceData = data.articles.slice(0, 3);
        const totalList = localStorage.getItem('totalList');
        if (totalList != null) {
          const list = JSON.parse(totalList);
          let updatedTotalList = [...list, ...data.articles];
          localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
        }
        this.apiState.setScienceDataList(data.articles);
      },

      (err) => {
        this.showScienceSpinner = false;
      }
    );

    //TEC
    this.api.category('technology').subscribe(
      (data) => {
        this.showTechnologySpinner = false;

        this.technologyData = data.articles.slice(0, 3);
        const totalList = localStorage.getItem('totalList');
        if (totalList != null) {
          const list = JSON.parse(totalList);
          let updatedTotalList = [...list, ...data.articles];
          localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
        }
        this.apiState.setTechnologyDataList(data.articles);
      },
      (err) => {
        this.showTechnologySpinner = false;
      }
    );

    //BUSINESS
    this.api.category('business').subscribe(
      (data) => {
        this.showBusinessSpinner = false;

        this.businessData = data.articles.slice(0, 3);
        const totalList = localStorage.getItem('totalList');
        if (totalList != null) {
          const list = JSON.parse(totalList);
          let updatedTotalList = [...list, ...data.articles];
          localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
        }
        this.apiState.setBusinessDataList(data.articles);
      },
      (err) => {
        this.showBusinessSpinner = false;
      }
    );

    //SPORTS
    this.api.category('sports').subscribe(
      (data) => {
        this.showSportsSpinner = false;

        this.sportsData = data.articles.slice(0, 3);
        const totalList = localStorage.getItem('totalList');
        if (totalList != null) {
          const list = JSON.parse(totalList);
          let updatedTotalList = [...list, ...data.articles];
          localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
        }
        this.apiState.setSportsDataList(data.articles);
      },
      (err) => {
        this.showSportsSpinner = false;
      }
    );

    //ENTERTAINMENT
    this.api.category('entertainment').subscribe(
      (data) => {
        this.showEntertainmentSpinner = false;

        this.entertainmentData = data.articles.slice(0, 3);
        const totalList = localStorage.getItem('totalList');
        if (totalList != null) {
          const list = JSON.parse(totalList);
          let updatedTotalList = [...list, ...data.articles];
          localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
        }
        this.apiState.setEntertainmentDataList(data.articles);
      },
      (err) => {
        this.showEntertainmentSpinner = false;
      }
    );

    //HEALTH
    this.api.category('health').subscribe(
      (data) => {
        this.showHealthSpinner = false;

        this.healthData = data.articles.slice(0, 3);
        const totalList = localStorage.getItem('totalList');
        if (totalList != null) {
          const list = JSON.parse(totalList);
          let updatedTotalList = [...list, ...data.articles];
          localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
        }
        this.apiState.setHealthDataList(data.articles);
      },
      (err) => {
        this.showHealthSpinner = false;
      }
    );
  }

  storeNews(item: dData) {
    this.btnText = 'To be Read Later..';
    this.apiState.getReadLater.subscribe((res) => {
      this.readLaterList = res;
    });
    const preExistingReadL = this.readLaterList.find(
      (readL) => readL.title === item.title
    );

    if (preExistingReadL == undefined) {
      this.readLaterList = [...this.readLaterList, item];
    }
    this.apiState.setReadLater(this.readLaterList);
  }

  openSnackBar() {
    this.storeNews(this.firstData);
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
