import { Component, OnInit } from '@angular/core';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
})
export class TopStoriesComponent implements OnInit {
  dData!: any;

  constructor(private apiState: NewsApiStateService) {}

  ngOnInit(): void {
    this.apiState.getTopHeadlines.subscribe((res) => {
      this.dData = res;
    });
  }
}
