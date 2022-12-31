import { Component, OnInit } from '@angular/core';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss'],
})
export class HealthComponent implements OnInit {
  dData!: any;
  constructor(private apiState: NewsApiStateService) {}

  ngOnInit(): void {
    this.apiState.getHealthDataList.subscribe((res) => (this.dData = res));
  }
}
