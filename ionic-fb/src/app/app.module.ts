import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TeamsPage } from '../pages/teams/teams';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamDetailsPage } from '../pages/team-details/team-details';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { LeagueServiceProvider } from '../providers/league-service/league-service';
import { ApiProvider } from '../providers/api/api';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { HttpModule } from '@angular/http';
import { TeamSchedulePage } from '../pages/team-schedule/team-schedule';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TournamentsPage,
    TeamDetailsPage,
    StandingsPage,
    TeamSchedulePage,
    TeamHomePage,
    HomePage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TournamentsPage,
    TeamDetailsPage,
    StandingsPage,
    TeamSchedulePage,
    TeamHomePage,
    HomePage,
    SignUpPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LeagueServiceProvider,
    ApiProvider
  ]
})
export class AppModule {}
