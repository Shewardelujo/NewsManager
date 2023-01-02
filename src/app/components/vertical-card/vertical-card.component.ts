import { Component, Input, OnInit } from '@angular/core';
import { dData } from 'src/app/dummydata/ddata';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss'],
})
export class VerticalCardComponent implements OnInit {
  @Input() item!: dData;
  btnText: string = 'Read Later';

  readLaterList!: dData[];

  constructor(private apiState: NewsApiStateService) {}

  ngOnInit(): void {}
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
}
