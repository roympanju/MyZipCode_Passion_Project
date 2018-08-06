import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { TeamHomePage } from '../team-home/team-home';
import { LeagueServiceProvider } from '../../providers/league-service/league-service';
import { TeamSchedulePage } from '../team-schedule/team-schedule';
import { TeamHomePage } from '../team-home/team-home';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams =[];
  public league: any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public leagueServiceProvider: LeagueServiceProvider) {
    this.league = this.navParams.data;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TeamsPage');
    let leag = this.navParams.data;
    //console.log(leag);
    this.leagueServiceProvider.getleagueData(leag.id).subscribe(data => {
      this.teams = data.teams;
      // let seasons = data[0];
      console.log(this.teams);
    });
  }

  itemTapped(_$event, team){
    //passing an object with the team and league objects inside it so ican have access to both those objects in any of the tabs on the TeamHomePage
    this.navCtrl.push(TeamHomePage, {teamObject: {team: team, league: this.league}});
    console.log({team, league: this.league})
  }


}
