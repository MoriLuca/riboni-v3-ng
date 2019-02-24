import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Lavorazione } from 'src/app/models/lavorazione/lavorazione';

@Component({
  selector: 'app-lavorazioni',
  templateUrl: './lavorazioni.component.html',
  styleUrls: ['./lavorazioni.component.css']
})
export class LavorazioniComponent implements OnInit {

  private _lavorazioni: Lavorazione[] = [];
  private _lavorazione: Lavorazione = new Lavorazione();
  private _showPopUp: boolean = false;
  private _query: string = "";

  constructor(private _rtmSrvc: GlobalRuntimeConfigService, private _api: ApiService) { }

  ngOnInit() {
    this.getLavorazioni();
    this._lavorazione.init();
  }

  getLavorazioni(){
    this._api.getLavorazioni().subscribe((res)=>{
      this._lavorazioni = res;
      console.log(this._lavorazioni);
      
    });
  }

  selectLavorazione(l: Lavorazione){
    this._lavorazione.clone(l);
    this._showPopUp = true;
  }

  hidePopUp() { this._showPopUp = false; }
  showPopUp() { this._showPopUp = true; }

  modificaLavorazione(){
    
    this._api.postLavorazione(this._lavorazione).subscribe((res)=>{
      if (res == 1){
        alert("OK, Righe aggiorate 1.\nOperazione conculsa con successo.");
        this.getLavorazioni();
        this.hidePopUp();
      } 
      else alert("Attenzione, riscontrato errore, operazione non eseguita.");
    });
  }

  reinizializzaLavorazione(){
    this._lavorazione.init();
  }

  eliminaLavorazione(){
    this._api.deleteLavorazione(this._lavorazione.LAVORAZIONE_ID).subscribe((res)=>{
      if (res == 1){
        alert("OK, Righe eliminate 1.\nOperazione conculsa con successo.");
        this.getLavorazioni();
        this.hidePopUp();
      }
      else alert("Attenzione, operazione non eseguita.");
    });
  }

  creaNuovaLavorazione(){
    if (this._lavorazione.LUNGHEZZA_TAGLIO > 600 || this._lavorazione.LUNGHEZZA_TAGLIO < 0){
      alert("Attenzione, la lunghezza taglio non puo essere maggiore di 600 o minore di 0 [mm].");
      return;
    }
    if (this._lavorazione.VELOCITA_LAMA_SP > 110 || this._lavorazione.VELOCITA_LAMA_SP < 11){
      alert("Attenzione, la velocità della lama non puo essere maggiore di 110 o minore di 11 [m/min].");
      return;
    }
    this._api.putLavorazione(this._lavorazione).subscribe((res)=>{
      if (res == 1){
        alert("OK, Righe aggiunte 1.\nOperazione conculsa con successo.");
        this.getLavorazioni();
        this.hidePopUp();
      }
      else alert("Attenzione, operazione non eseguita.");
    });
  }

  consentiCreazione(){
    let nomeEsistente = (this._lavorazioni.find(n=>n.NAME === this._lavorazione.NAME)) ?true:false;
    return this.controlloDatiOk() && !nomeEsistente;
    
  }

  consentiModifica(){
    let idEsistente = this._lavorazioni.find(n=>n.LAVORAZIONE_ID === this._lavorazione.LAVORAZIONE_ID) || false;
    return this.controlloDatiOk() && idEsistente;
  }

  controlloDatiOk(){
    let lunghezzaNome = this._lavorazione.NAME.trim().length > 0 && this._lavorazione.NAME.trim().length <= 50;
    let lunghezzaPezzo = this._lavorazione.LUNGHEZZA_TAGLIO < 600;
    let velLama = this._lavorazione.VELOCITA_LAMA_SP >= 11 && this._lavorazione.VELOCITA_LAMA_SP <= 110; 
    return lunghezzaNome && lunghezzaPezzo && velLama;
  }

  consentiEliminazione(){
    let idEsistente = this._lavorazioni.find(n=>n.LAVORAZIONE_ID === this._lavorazione.LAVORAZIONE_ID) || false;
    return idEsistente;
  }

  aperturaPopupNuovaLavorazione(){
    this._lavorazione.init();
    this.showPopUp();
  }
}