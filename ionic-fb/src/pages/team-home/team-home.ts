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
  public teamObject: any={};
  public team: any={};
  public league: any = {};
  public teamDetailTab = TeamDetailsPage;
  public teamScheduleTab = TeamSchedulePage;
  public standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.teamObject = this.navParams.get("team");
    this.team = this.teamObject.team;
    //this.league = this.navParams.get("league");
    this.league = this.teamObject.league;
  }

  ionViewDidLoad() {
    console.log("TEAM - HOME")
    console.log(this.team);
    // console.log(this.team.name);
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}
