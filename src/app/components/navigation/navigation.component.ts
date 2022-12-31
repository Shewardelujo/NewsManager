import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dData } from 'src/app/dummydata/ddata';
import { NewsApiStateService } from 'src/app/services/news-api-state.service';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  form = { searchInput: '' };
  searchData!: dData[];

  constructor(
    private api: NewsApiService,
    private router: Router,
    private apiState: NewsApiStateService
  ) {}

  ngOnInit(): void {}
  newsSearch() {
    this.api.search(this.form.searchInput).subscribe((data) => {
      this.searchData = data.articles;
      this.apiState.setSearchResults(data.articles);

      const totalList = localStorage.getItem('totalList');
      if (totalList != null) {
        const list = JSON.parse(totalList);
        let updatedTotalList = [...list, ...data.articles];
        localStorage.setItem('totalList', JSON.stringify(updatedTotalList));
      }

      this.router.navigate(['/search-results']);
    });
  }
}
