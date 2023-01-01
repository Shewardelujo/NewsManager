import { Component, OnInit } from '@angular/core';
import { dData } from 'src/app/dummydata/ddata';

@Component({
  selector: 'app-current-news',
  templateUrl: './current-news.component.html',
  styleUrls: ['./current-news.component.scss'],
})
export class CurrentNewsComponent implements OnInit {
  totalList: any = [];
  currentList: any = [];
  previousDay!: any;
  dData!: any;

  constructor() {}

  ngOnInit(): void {
    this.totalList = JSON.parse(localStorage.getItem('totalList') || '[]');

    this.totalList.map((news: dData) => {
      if (
        Number(new Date(news.publishedAt)) - Number(this.getPreviousDay()) >
        0
      ) {
        this.currentList = [...this.currentList, news];
      }
    });

    console.log('this.currentList :>> ', this.currentList);
  }

  //setDate and getDate are properties that can be called on new Date()
  getPreviousDay(date: any = new Date()): any {
    const previous = date.setDate(date.getDate() - 1);

    return previous;
  }
}
