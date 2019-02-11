import { Component, OnInit } from '@angular/core';
import { Produzione } from 'src/app/models/produzione/produzione';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Lavorazione } from 'src/app/models/lavorazione/lavorazione';

@Component({
  selector: 'app-produzione',
  templateUrl: './produzione.component.html',
  styleUrls: ['./produzione.component.css']
})
export class ProduzioneComponent implements OnInit {

  private _produzioni: Produzione[] = [];
  private _lavorazioni: Lavorazione[] = [];
  private _produzione: Produzione = new Produzione();
  private _query: string = "";

  constructor(private _rtmSrvc: GlobalRuntimeConfigService, private _api: ApiService) { }
  
  ngOnInit() {
    this.getProduzioni();
    this.getLavorazioni();
  }

  getProduzioni(){
    this._api.getProduzione().subscribe((res)=>{
      this._produzioni = res;
    })
  }

  getLavorazioni(){
    this._api.getLavorazioni().subscribe((res)=>{
      this._lavorazioni = res;
    });
  }

  cambiaPriorita(p: Produzione){
    let newPriorita = prompt("Inserire il nuovo valore di priorità da 0 a 100.", "0");
    let ok = (!isNaN(+newPriorita) && (+newPriorita >= 0 && +newPriorita <= 100));
    
    if (ok){
      this._api.aggiornaPriorita({produzioneId: p.PRODUZIONE_ID, priorita: +newPriorita}).subscribe((res)=>{
        if(res == 1){
          alert("OK, Righe aggiorate 1.\nOperazione conculsa con successo.");
          this.getProduzioni();
        }
        else{
          alert("Attenzione, riscontrato errore, operazione non eseguita.");
        }
      });
    }
    else{
      alert("Attenzione inserire un numero valido,\ncompreso tra 0 e 100.");
    }
    

  }

  aggiungiProduzione(){
    this._api.putProduzione(this._produzione).subscribe((res)=>{
      if(res == 1){
        alert("OK, Righe aggiunte 1.\nOperazione conculsa con successo.");
        this.getProduzioni();
      }
      else{
        alert("Attenzione, riscontrato errore, operazione non eseguita.");
      }
    });
  }
}
