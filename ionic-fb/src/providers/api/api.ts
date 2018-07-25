import { HttpClient } from '@angular/common/http';
import  { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Rx';

/*     
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  private baseUrl = 'http:localhost:8080/user';

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getUsers(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/all.json`).subscribe(res => resolve(res.json()));
    });
  }

  saveUser(createAccountInfo: any) : Observable<Object> {
    //return this.http.post(`http://localhost:8080/user/add?username=${createAccountInfo.name}&email=${createAccountInfo.email}&password=${createAccountInfo.password}`, {})
    return this.http.post(`http://localhost:8080/user/add`, createAccountInfo);
  }

}
