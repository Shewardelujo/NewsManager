import { dData } from './../../dummydata/ddata';
import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  category = 'general';
  dData!: dData[];
  totalList: any = [];
  showDataSpinner = true;

  constructor(private api: NewsApiService) {}

  ngOnInit(): void {
    this.generalApiCall();
  }

  generalApiCall = () => {
    this.api.category(this.category).subscribe(
      (data) => {
        this.showDataSpinner = false;

        this.dData = data.articles;
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
  };
}
