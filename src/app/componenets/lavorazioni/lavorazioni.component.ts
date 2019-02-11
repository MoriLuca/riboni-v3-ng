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
  private _query: string = "";

  constructor(private _rtmSrvc: GlobalRuntimeConfigService, private _api: ApiService) { }

  ngOnInit() {
    this.getLavorazioni();
    this._lavorazione.init();
  }

  getLavorazioni(){
    this._api.getLavorazioni().subscribe((res)=>{
      this._lavorazioni = res;
    });
  }

  selectLavorazione(l: Lavorazione){
    this._lavorazione.clone(l);
  }

  modificaLavorazione(){
    this._api.postLavorazione(this._lavorazione).subscribe((res)=>{
      if (res == 1){
        alert("OK, Righe aggiorate 1.\nOperazione conculsa con successo.");
        this.getLavorazioni();
      } 
      else alert("Attenzione, operazione non eseguita.");
    });
  }

  eliminaLavorazione(){
    this._api.deleteLavorazione(this._lavorazione.LAVORAZIONE_ID).subscribe((res)=>{
      if (res == 1){
        alert("OK, Righe eliminate 1.\nOperazione conculsa con successo.");
        this.getLavorazioni();
      }
      else alert("Attenzione, operazione non eseguita.");
    });
  }

  creaNuovaRicetta(){
    this._api.putLavorazione(this._lavorazione).subscribe((res)=>{
      if (res == 1){
        alert("OK, Righe aggiunte 1.\nOperazione conculsa con successo.");
        this.getLavorazioni();
      }
      else alert("Attenzione, operazione non eseguita.");
    });
  }

  nomeRicettaEsistente(){
    
    return this._lavorazioni.find(n=>n.NAME === this._lavorazione.NAME) || false;
    
  }

}