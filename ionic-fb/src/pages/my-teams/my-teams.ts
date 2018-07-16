import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import {ApiProvider } from '../../providers/api/api';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public toastCtrl: ToastController) {
  }


  myButton(){
    this.navCtrl.push(TournamentsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  createAccount(){
    this.navCtrl.push(SignUpPage);
  }



}
