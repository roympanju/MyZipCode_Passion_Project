
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import {ApiProvider } from '../../providers/api/api';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user: any = {};
  error: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public toastCtrl: ToastController) {
  }

  // ngOnInit(){
  //   this.loadUsers();
  // }

  // loadUsers(){
  //   this.apiProvider.getUsers().subscribe(data => this.user =data["_embedded"]["users"],
  // err => {
  //   console.log(err);
  // });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  save(form: NgForm){
    let update: boolean = form['href'];
    this.apiProvider.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'User "'+form.name + '" ' + ((update) ? 'updated' : 'added') + '.',
        duration: 2000
      });
      toast.present();
      //this.dismiss();
    }, error => this.error = error)
  }

}