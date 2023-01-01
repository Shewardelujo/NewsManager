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
  previousDay!: any;

  constructor() {}

  ngOnInit(): void {
    this.totalList = JSON.parse(localStorage.getItem('totalList') || '[]');

    this.totalList.map((news: dData) => {
      if (
        Number(new Date(news.publishedAt)) - Number(this.getPreviousDay()) <=
        0
      ) {
        this.oldList = [...this.oldList, news];
      }
    });

    console.log('this.oldList :>> ', this.oldList);
  }

  //setDate and getDate are properties that can be called on new Date()

  getPreviousDay(date: any = new Date()): any {
    const previous = date.setDate(date.getDate() - 1);

    return previous;
  }
}
