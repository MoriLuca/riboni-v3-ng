import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';
import { ProduzioneConclusa } from 'src/app/models/produzione/produzioneConclusa';

@Component({
  selector: 'app-produzione',
  templateUrl: './produzione-conclusa.component.html',
  styleUrls: ['./produzione-conclusa.component.css']
})
export class ProduzioneConclusaComponent implements OnInit {

  private _produzioni: ProduzioneConclusa[] = [];
  private _query: string = "";

  constructor(private _rtmSrvc: GlobalRuntimeConfigService, private _api: ApiService) { }
  
  ngOnInit() {
    this.getProduzioniConcluse();
  }

  getProduzioniConcluse(){
    this._api.getProduzioneConclusa().subscribe((res)=>{
      this._produzioni = res;
    })
  }

}
