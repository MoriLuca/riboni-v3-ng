import {
  Component,
  OnInit
} from '@angular/core';
import {
  Produzione
} from 'src/app/models/produzione/produzione';
import {
  GlobalRuntimeConfigService
} from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import {
  ApiService
} from 'src/app/services/api/api.service';
import {
  Lavorazione
} from 'src/app/models/lavorazione/lavorazione';
import {
  ITag
} from 'src/app/models/plc/tags';

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
  private _showPopUp: boolean = false;

  constructor(private _rtmSrvc: GlobalRuntimeConfigService, private _api: ApiService) {}

  ngOnInit() {
    this.getProduzioni();
    this.getLavorazioni();
    this._produzione.init();
    setInterval(() => {
      this.getProduzioni()
    }, 2000);
  }

  getProduzioni() {
    this._api.getProduzione().subscribe((res) => {
      this._produzioni = res;
    })
  }

  getLavorazioni() {
    this._api.getLavorazioni().subscribe((res) => {
      this._lavorazioni = res;
    });
  }

  cambiaPriorita(p: Produzione) {
    let newPriorita = prompt("Inserire il nuovo valore di priorità da 0 a 100.", "0");
    let ok = (!isNaN(+newPriorita) && (+newPriorita >= 0 && +newPriorita <= 100));

    if (ok) {
      this._api.aggiornaPriorita({
        produzioneId: p.PRODUZIONE_ID,
        priorita: +newPriorita
      }).subscribe((res) => {
        if (res == 1) {
          alert("OK, Righe aggiorate 1.\nOperazione conculsa con successo.");
          this.getProduzioni();
        } else {
          alert("Attenzione, riscontrato errore, operazione non eseguita.");
        }
      });
    } else {
      alert("Attenzione inserire un numero valido,\ncompreso tra 0 e 100.");
    }


  }

  hidePopUp() {
    this._showPopUp = false;
  }
  showPopUp() {
    this._showPopUp = true;
  }

  aggiungiProduzione() {
    if (confirm("Sei sicuro di voler aggiungere la produzione?") === true) {
      this._api.putProduzione(this._produzione).subscribe((res) => {
        if (res == 1) {
          alert("OK, Righe aggiunte 1.\nOperazione conculsa con successo.");
          this.getProduzioni();
          this.hidePopUp();
        } else {
          alert("Attenzione, riscontrato errore, operazione non eseguita.");
        }
      });
    }

  }

  enableAggiungiProduzione() {
    let codice = (this._produzioni.find(c => c.CODICE_PRODUZIONE === this._produzione.CODICE_PRODUZIONE) === undefined &&
      this._produzione.CODICE_PRODUZIONE.trim().length > 0);

    let idLav = this._produzione.LAVORAZIONE_ID;
    let priorita = this._produzione.PRIORITA >= 0 && this._produzione.PRIORITA <= 100;
    let target = this._produzione.TARGET > 0;
    return !(codice && idLav && priorita && target);
  }

  chiudiProduzione(p: Produzione) {
    if (confirm("Sei sicuro di voler Archiviare la produzione [ "+p.CODICE_PRODUZIONE+" ]?") === true) {
      console.log(p);

      this._api.chiusuraProduzione(p).subscribe((res) => {
        if (res == 1) {
          alert("OK, Produzione Archiviata.\nOperazione conculsa con successo.");
          this.getProduzioni();
        } else {
          alert("Attenzione, riscontrato errore, operazione non eseguita.");
        }
      });
    }
  }

  iniziaProduzione(p: Produzione) {
    if (confirm("Sei sicuro di voler iniziare la produzione [ "+p.CODICE_PRODUZIONE+" ]?") === true){

    console.log(p);
    //controllo se la macchina è nel corretto stato per ricevere i dati
    this._api.scritturaAllowed().subscribe((res) => {
      if (res.ready) {

        //controllo se c'è qualche produzione attiva : 
        this._api.getProduzioneattiva().subscribe((produzioneAttiva) => {

          if (!produzioneAttiva) {

            let tags: ITag[] = [];

            tags.push({
              name: 'monitor_lavorazione#programma_corrente',
              value: 200
            });
            tags.push({
              name: 'monitor_lavorazione#prossimo_programma',
              value: 200
            });
            tags.push({
              name: 'monitor_lavorazione#tagli_richiesti',
              value: p.TARGET
            });
            tags.push({
              name: 'monitor_home#velocita_lama_sp',
              value: this._lavorazioni.find(obj => obj.LAVORAZIONE_ID == p.LAVORAZIONE_ID).VELOCITA_LAMA_SP
            });
            tags.push({
              name: 'monitor_lavorazione#lunghezza_pezzo',
              value: this._lavorazioni.find(obj => obj.LAVORAZIONE_ID == p.LAVORAZIONE_ID).LUNGHEZZA_TAGLIO
            });
            tags.push({
              name: 'monitor_lavorazione#ripetizioni',
              value: 1
            });
            tags.push({
              name: 'monitor_lavorazione#tagli_effettuati',
              value: 0
            });



            this._api.writeTags(tags).subscribe((res) => {
              if (res == 1) {

                this._api.postAttivaProduzione(p).subscribe((res) => {
                  if (res) {
                    alert("OK, Produzione Inserita nel PLC.\nOperazione conculsa con successo.");
                    this.getProduzioni();
                  } else {
                    alert("Attenzione, riscontrato errore, operazione non eseguita.");
                  }
                });

              } else {
                alert("Attenzione, riscontrato errore, operazione non eseguita.");
              }
            });

          } else {
            alert("Non è possibile aprire una nuova produzione.\nChiudere prima la produzione attiva.");
          }
        });

      } else {
        alert("Attenzione!!\nPer procedere alla scrittura la macchina deve essere in modalità manuale.\n" +
          "La velocità di avanzamento deve essere uguale a 0.");
        return;
      }
    })

  }


  }

  aperturaPopupNuovaLavorazione() {
    this._produzione.init();
    this.showPopUp();
  }

}
