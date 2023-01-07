import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { VerticalCardComponent } from './components/vertical-card/vertical-card.component';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { BusinessComponent } from './pages/business/business.component';
import { HealthComponent } from './pages/health/health.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { GeneralComponent } from './pages/general/general.component';
import { ScienceComponent } from './pages/science/science.component';
import { SportsComponent } from './pages/sports/sports.component';
import { TruncatePipe } from './pipe/transform.pipe';
import { HorizontalPageCardComponent } from './components/horizontal-page-card/horizontal-page-card.component';
import { ReadLaterComponent } from './pages/read-later/read-later.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { CurrentNewsComponent } from './pages/current-news/current-news.component';
import { OldNewsComponent } from './pages/old-news/old-news.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HorizontalCardPlaceholderComponent } from './components/placeholders/horizontal-card-placeholder/horizontal-card-placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    VerticalCardComponent,
    HorizontalCardComponent,
    FooterComponent,
    TopStoriesComponent,
    BusinessComponent,
    HealthComponent,
    EntertainmentComponent,
    TechnologyComponent,
    GeneralComponent,
    ScienceComponent,
    SportsComponent,
    TruncatePipe,
    HorizontalPageCardComponent,
    ReadLaterComponent,
    SearchResultsComponent,
    CurrentNewsComponent,
    OldNewsComponent,
    SnackBarComponent,
    SpinnerComponent,
    HorizontalCardPlaceholderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
