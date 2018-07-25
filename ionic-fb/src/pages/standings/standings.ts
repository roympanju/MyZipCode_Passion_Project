import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeagueServiceProvider } from '../../providers/league-service/league-service';

/**
 * Generated class for the StandingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {

  public team: any;
  public league: any;
  public standings =[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public leagueServiceApi: LeagueServiceProvider) {

    //this.team = this.navParams.get("team").data;
    this.league = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log(this.league.name);
    let table = this.navParams.data;
    this.leagueServiceApi.getLeasgueStandings(table.id).subscribe(data => {
      this.standings = data.standings[0].table;
      console.log(this.standings);
    })
  }

}
