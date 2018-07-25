import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeagueServiceProvider } from '../../providers/league-service/league-service';

/**
 * Generated class for the TeamDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html',
})
export class TeamDetailsPage {

  public team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public leagueServiceProvider: LeagueServiceProvider) {
    this.team = this.navParams.data;
    
  }

  ionViewDidLoad() {
    console.log(this.team.name);
  }

  // getTeams(){

  //   this.leagueServiceProvider.load().subscribe(data => {
  //     this.team = data["competitions"];
  //   });
  // }

 

}
