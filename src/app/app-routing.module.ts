import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';
import { CurrentNewsComponent } from './pages/current-news/current-news.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { GeneralComponent } from './pages/general/general.component';
import { HealthComponent } from './pages/health/health.component';
import { OldNewsComponent } from './pages/old-news/old-news.component';
import { ReadLaterComponent } from './pages/read-later/read-later.component';
import { ScienceComponent } from './pages/science/science.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SportsComponent } from './pages/sports/sports.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'top-stories', component: TopStoriesComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'health', component: HealthComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'read-later', component: ReadLaterComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'current-news', component: CurrentNewsComponent },
  { path: 'old-news', component: OldNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
