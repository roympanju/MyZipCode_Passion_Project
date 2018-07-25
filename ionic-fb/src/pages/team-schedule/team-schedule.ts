import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeagueServiceProvider } from '../../providers/league-service/league-service';

/**
 * Generated class for the TeamSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-schedule',
  templateUrl: 'team-schedule.html',
})
export class TeamSchedulePage {
  public team: any={};
  public matches=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public leagueServiceApi: LeagueServiceProvider ){
      this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandingsPage');
    let matches = this.navParams.data;
    this.leagueServiceApi.getTeamMatches(matches.id).subscribe(data => {
      this.matches = data.matches;
      console.log(this.matches);
    })
  }

  

}
