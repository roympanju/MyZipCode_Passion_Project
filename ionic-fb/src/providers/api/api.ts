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
    return this.http.get('http:localhost:8080/users')
  }

  save(user: any): Observable<any>{
    let result: Observable<Object>;
    if (user['href']){
      result = this.http.put(user.href, user);
    }
    else{
      result = this.http.post('http:localhost:8080/users', user)
    }
    return result.catch(error => Observable.throw(error));

  }

}
