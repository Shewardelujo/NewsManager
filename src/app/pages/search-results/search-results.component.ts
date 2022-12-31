import { Component, OnInit } from '@angular/core';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  dData!: any;

  constructor(private apiState: NewsApiStateService) {}

  ngOnInit(): void {
    this.apiState.getSearchResults.subscribe((res) => {
      this.dData = res;
    });
  }
}
