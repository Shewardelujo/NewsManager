import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dData } from 'src/app/dummydata/ddata';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss'],
})
export class ViewNewsComponent implements OnInit {
  title!: any;
  singleNews!: dData;

  totalList: any = [];

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.title = params.get('title');
    });

    this.totalList = JSON.parse(localStorage.getItem('totalList') || '[]');

    console.log('this.totalList :>> ', this.totalList);

    this.getNewsByTitle(this.title);
  }
  getNewsByTitle(title: string) {
    this.singleNews = this.totalList.filter(
      (news: dData) => news.title == title
    )[0];
  }
}
