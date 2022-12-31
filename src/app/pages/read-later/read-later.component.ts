import { Component, OnInit } from '@angular/core';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';

@Component({
  selector: 'app-read-later',
  templateUrl: './read-later.component.html',
  styleUrls: ['./read-later.component.scss'],
})
export class ReadLaterComponent implements OnInit {
  dData!: any;

  constructor(private apiState: NewsApiStateService) {}

  ngOnInit(): void {
    this.apiState.getReadLater.subscribe((res) => (this.dData = res));
  }
}
