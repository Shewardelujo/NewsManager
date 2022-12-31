import { Component, OnInit } from '@angular/core';
import { dData } from 'src/app/dummydata/ddata';

@Component({
  selector: 'app-old-news',
  templateUrl: './old-news.component.html',
  styleUrls: ['./old-news.component.scss'],
})
export class OldNewsComponent implements OnInit {
  totalList: any = [];
  oldList: any = [];
  dData!: any;
  timeUp!: Date;

  constructor() {}

  ngOnInit(): void {
    this.totalList = JSON.parse(localStorage.getItem('totalList') || '[]');

    console.log('this.totalList :>> ', this.totalList);
    this.timeUp = new Date();

    this.getOldNews();
  }

  dueDate(date: any) {
    return new Date(date);
  }
  getOldNews() {
    this.oldList = this.totalList.filter((news: dData) => {
      // this.dueDate(news.publishedAt) <= this.timeUp;
      new Date(news.publishedAt) != new Date();
    });
    console.log('this.totalList :>> ', this.totalList);

    console.log('this.oldList :>> ', this.oldList);
  }
}
