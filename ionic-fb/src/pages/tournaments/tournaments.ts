import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public leagueServiceProvider: LeagueServiceProvider, 
      public loadingController: LoadingController) {
    
  }

  // getLeagues(){

  //   this.leagueServiceProvider.load().subscribe(data => {
  //     this.leagues = data["competitions"];
  //   });
  // }
  ionViewDidLoad() {
    //this.leagueServiceProvider.load().then(data => this.leagues = data);
    let loader = this.loadingController.create({
      content: 'Getting tournaments...',
      //spinner: 'dots'
    });
    loader.present().then(() => {
      const areaNames = new Set(['England', 'Spain', 'Germany', 'Italy', 'France']);
      const leaguesNames = new Set(['Premier League', 'Primera Division', 'Bundesliga', 'Serie A', 'Ligue 1']);
      
      this.leagueServiceProvider.load().subscribe(data => {
            this.leagues = data["competitions"];
            this.leagues = this.leagues.filter(x => {
            
              return areaNames.has(x.area.name) && leaguesNames.has(x.name);
              
          });
          loader.dismiss();
      });
    })

  }

  name(n: string) {
    console.log(n);
  }

  itemTapped1(){
    this.navCtrl.push(TeamsPage);
  }

  goToTeamsPage(_$event, leag){
    this.navCtrl.push(TeamsPage, leag);
  }

  // getTeams(_$event, id) {
  //   // console.log(id)
  //   // this.leagueServiceProvider.getleagueData(id).subscribe(e => {
  //   //   //console.log(e)
  //     this.getToteamsPage(TeamsPage, id);
  //   //})
  // }
}
