import { Component, OnInit } from '@angular/core';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {
  dData!: any;
  constructor(private apiState: NewsApiStateService) {}

  ngOnInit(): void {
    this.apiState.getBusinessDataList.subscribe((res) => {
      this.dData = res;
    });
  }
}
