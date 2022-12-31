import { Component, OnInit } from '@angular/core';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  dData!: any;
  constructor(private apiState: NewsApiStateService) {}

  ngOnInit(): void {
    this.apiState.getTechnologyDataList.subscribe((res) => (this.dData = res));
  }
}
