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
  timeUp!: Date;

  dData!: any;

  constructor() {}

  ngOnInit(): void {
    this.totalList = JSON.parse(localStorage.getItem('totalList') || '[]');

    // console.log('this.totalList :>> ', this.totalList);
    this.timeUp = new Date();

    this.getCurrentNews();
  }

  dueDate(date: any) {
    return new Date(date);
  }

  getCurrentNews() {
    this.currentList = this.totalList.filter((news: dData) => {
      // console.log('news.publishedAt :>> ', new Date(news.publishedAt));
      new Date(news.publishedAt) == new Date();
    });
    // console.log('this.totalList :>> ', this.totalList);

    // console.log('this.currentList :>> ', this.currentList);
  }
}
