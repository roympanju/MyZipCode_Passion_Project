import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Rx';

/*     
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getUsers(){
    return this.http.get('http:localhost:8080/user')
  }

  saveUser(createAccountInfo: any) : Observable<Object> {
    //return this.http.post(`http://localhost:8080/user/add?username=${createAccountInfo.name}&email=${createAccountInfo.email}&password=${createAccountInfo.password}`, {})
    return this.http.post(`http://localhost:8080/user/add`, createAccountInfo);
  }

}
