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

  constructor(private api: NewsApiService) {}

  ngOnInit(): void {
    this.generalApiCall();
  }

  generalApiCall = () => {
    this.api.category(this.category).subscribe((data) => {
      this.dData = data.articles;
      console.log(data.articles);
      const totalList = localStorage.getItem('totalList');
      if (totalList != null) {
        const list = JSON.parse(totalList);
        console.log('this.dData :>> ', this.dData);
        let updatedTotalList = [...list, ...data.articles];
        console.log('typeof updatedTotalList :>> ', typeof updatedTotalList);
        localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
      }
    });
  };
}
