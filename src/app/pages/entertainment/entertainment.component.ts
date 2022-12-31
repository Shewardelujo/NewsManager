import { Component, OnInit } from '@angular/core';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss'],
})
export class EntertainmentComponent implements OnInit {
  dData!: any;
  constructor(private apiState: NewsApiStateService) {}

  ngOnInit(): void {
    this.apiState.getEntertainmentDataList.subscribe(
      (res) => (this.dData = res)
    );
  }
}
