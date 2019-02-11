import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ITag } from 'src/app/models/plc/tags';
import { Lavorazione } from 'src/app/models/lavorazione/lavorazione';
import { Produzione } from 'src/app/models/produzione/produzione';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backendUrl = "http://localhost:1880/";
  
  private endpoint = this.backendUrl + 'api/';
  private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

  constructor(private http: HttpClient) { }


  //#region Tags Handler
  getAllTags () {
    return this.http.get<ITag[]>(this.endpoint+'tags/readAllTags',this.httpOptions);
  }

  getCurrentRecepy () {
    return this.http.get<ITag[]>(this.endpoint+'tags/ricettaCorrente',this.httpOptions);
  }
  

  getTagsByGroup (groupName: string) {
    return this.http.get<ITag[]>(this.endpoint+'tags/readTagsGroup?tagname='+groupName,this.httpOptions);
  }

  getTag (tagName: string) {
    return this.http.get<ITag[]>(this.endpoint+'tags/readTag&tagname='+tagName,this.httpOptions);
  }
  //#endregion



  //#region OPCUA Handler
  getOPCUABrowserResults () {
    return this.http.get(this.endpoint+'OPCUA/actualBrowserResults',this.httpOptions);
  }

  deleteOPCUABrowserResults (){
    return this.http.delete(this.endpoint+'OPCUA/actualBrowserResults',this.httpOptions);
  }
  //#endregion

  

  //#region Lavorazioni
  getLavorazioni(){
    return this.http.get<Lavorazione[]>(this.endpoint + 'lavorazioni', this.httpOptions);
  }

  putLavorazione(lavorazione: Lavorazione){
    let body =  JSON.stringify(lavorazione);
    return this.http.put<number>(this.endpoint + 'lavorazioni', body, this.httpOptions);
  }

  postLavorazione(lavorazione: Lavorazione){
    let body =  JSON.stringify(lavorazione);
    return this.http.post<number>(this.endpoint + 'lavorazioni', body, this.httpOptions);
  }

  deleteLavorazione(idLavorazione: number){
    return this.http.delete<number>(this.endpoint + 'lavorazioni?LAVORAZIONE_ID='+idLavorazione, this.httpOptions);
  }

  //#endregion



  //#region Produzione
  getProduzione(){
    return this.http.get<Produzione[]>(this.endpoint + 'produzione', this.httpOptions);
  }

  putProduzione(prod: Produzione){
    let body =  JSON.stringify(prod);
    return this.http.put<number>(this.endpoint + 'produzione', body, this.httpOptions);
  }

  deleteProduzione(idProduzione: number){
    return this.http.delete<number>(this.endpoint + 'produzione?PRODUZIONE_ID='+idProduzione, this.httpOptions);
  }
  //#endregion




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


