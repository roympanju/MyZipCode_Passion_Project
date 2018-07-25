import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

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
  apiUrl2 = 'http://api.football-data.org/v2/teams/'

  httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': 'd550e63aaf6349f78dd2199f9d2dc115'
    })
  };

  load(){
      return this.http.get(this.apiUrl, this.httpOptions);
      // return new Promise(resolve => {
      //   this.http.get(`${this.apiUrl, this.httpOptions}`).subscribe(res => resolve(res.json()));
      // });
  }

  getleagueData(tournamentId): Observable<any>{
    const url = this.apiUrl + tournamentId + '/teams';
    console.log(url);
    return this.http.get(this.apiUrl + tournamentId + '/teams', this.httpOptions);
  }

  getTeamMatches(teamId): Observable<any>{
    return this.http.get(this.apiUrl2 + teamId + '/matches', this.httpOptions);
  }

  getLeasgueStandings(tournamentId): Observable<any>{
    return this.http.get(this.apiUrl + tournamentId + '/standings', this.httpOptions);
  }
  

}
