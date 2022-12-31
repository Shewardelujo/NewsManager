import { Component, OnInit } from '@angular/core';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
})
export class SportsComponent implements OnInit {
  dData!: any;
  constructor(private apiState: NewsApiStateService) {}

  ngOnInit(): void {
    this.apiState.getSportsDataList.subscribe((res) => (this.dData = res));
  }
}
