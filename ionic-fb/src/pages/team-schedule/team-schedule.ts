import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeagueServiceProvider } from '../../providers/league-service/league-service';
import { TeamHomePage } from '../team-home/team-home';

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
  public paramObject: any;
  public team: any;
  public team1: any;
  public league: any;
  public matches=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public leagueServiceApi: LeagueServiceProvider ){
    //this.league = this.navParams.data;
    this.paramObject = this.navParams.data;
    this.league = this.paramObject.league;
    this.team = this.paramObject.team;
    this.team1 = this.team1;
  }

  ionViewDidLoad() {
    //console.log(league);
    console.log(this.navParams.data)
    console.log(this.league)
    console.log(this.team)
    let matches = this.team.id;
    this.leagueServiceApi.getTeamMatches(matches).subscribe(data => {
      this.matches = data.matches;
      console.log(this.matches);
    })
  }

  goToThisHome(_$event, teamObject){
    this.leagueServiceApi.getleagueData(this.league.id).subscribe(data => { console.log(data["teams"]); let teams = data["teams"]; for( let i of teams){
      if(i.name === teamObject.name){
        this.team1 = i;
        break;
      }
    }
    console.log(this.team1);
    this.navCtrl.parent.parent.push(TeamHomePage, {team: {team: this.team1, league: this.league}});
    console.log({teamObject, league: this.league})});
  }

  // itemTapped(_$event, team){
  //   this.navCtrl.push(TeamHomePage, {team: {team: team, league: this.league}});
  //   console.log({team, league: this.league})
  // }

}
