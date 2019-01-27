import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ITag } from 'src/app/models/plc/tags';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backendUrl = "localhost:1880/";
  
  private endpoint = this.backendUrl + 'api/';
  private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',  
  })
};

  constructor(private http: HttpClient) { }

  getNormalTags () {
    // return this.http.get<ITag[]>(this.endpoint + 'getLiveTags',this.httpOptions);
    return this.http.get<ITag[]>('http://localhost:1880/api/getNormalTags',this.httpOptions);
  }

  getCriticalTags () {
    // return this.http.get<ITag[]>(this.endpoint + 'getLiveTags',this.httpOptions);
    return this.http.get<ITag[]>('http://localhost:1880/api/getCriticalTags',this.httpOptions);
  }

  getUtilityTags () {
    // return this.http.get<ITag[]>(this.endpoint + 'getLiveTags',this.httpOptions);
    return this.http.get<ITag[]>('http://localhost:1880/api/getUtilityTags',this.httpOptions);
  }

  getAlarmsTags () {
    // return this.http.get<ITag[]>(this.endpoint + 'getLiveTags',this.httpOptions);
    return this.http.get<ITag[]>('http://localhost:1880/api/getAlarmsTags',this.httpOptions);
  }

  getUltimiTagli (rowNumber: number) {
    return this.http.get('http://localhost:1880/api/tagli?count='+rowNumber,this.httpOptions);
  }

  // // post and get 
  // addNewPerson (user:UserForDotnet) {
  //   let body =  JSON.stringify(user);
  //   return this.http.post<number>(this.endpoint + 'registration', body, this.httpOptions);
  // }

  // login (credenziali:InputCredenzialiLogin) {
  //   let body =  JSON.stringify(credenziali);
  //   return this.http.post<User>(this.endpoint + 'login', body, this.httpOptions);
  // }

}


