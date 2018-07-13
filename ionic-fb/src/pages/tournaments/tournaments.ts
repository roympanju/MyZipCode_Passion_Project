import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import { LeagueServiceProvider } from '../../providers/league-service/league-service';


/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  leagues: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public leagueServiceProvider: LeagueServiceProvider) {
    this.getLeagues();
  }

  getLeagues(){

    this.leagueServiceProvider.load().subscribe(data => {
      this.leagues = data["competitions"];
    });
  }

  name(n: string) {
    console.log(n);

  }
  itemTapped1(){
    this.navCtrl.push(TeamsPage);
  }

  getToteamsPage(){
    this.navCtrl.push(TeamsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

}
