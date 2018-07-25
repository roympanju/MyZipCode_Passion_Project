import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamDetailsPage } from '../team-details/team-details';
import { MyTeamsPage } from '../my-teams/my-teams';
import { TeamSchedulePage } from '../team-schedule/team-schedule';
import { StandingsPage } from '../standings/standings';

/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  public team: any={};
  public league: any = {};
  public teamDetailTab = TeamDetailsPage;
  public teamScheduleTab = TeamSchedulePage;
  public standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.get("team");
    this.league = this.navParams.get("league");
  }

  ionViewDidLoad() {
    console.log(this.league.name);
  }

  goHome(){
    this.navCtrl.push(MyTeamsPage);
  }

}
