import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LeagueServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeagueServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LeagueServiceProvider Provider');
  }

  apiUrl = 'http://api.football-data.org/v2/competitions/';

  httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': 'd550e63aaf6349f78dd2199f9d2dc115'
    })
  };

  load(){
      return this.http.get(this.apiUrl, this.httpOptions);
  }
  

}
