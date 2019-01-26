import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';
import { PlcParametriLive } from 'src/app/models/plc/tags';

@Component({
  selector: 'app-normal-tags',
  templateUrl: './normal-tags.component.html',
  styleUrls: ['./normal-tags.component.css']
})
export class NormalTagsComponent implements OnInit {

  txt = new Testi();
  rtmSvc : GlobalRuntimeConfigService;
  api : ApiService;
  plc: PlcParametriLive;
  

  constructor(_globalRuntimeService :GlobalRuntimeConfigService,
              _api: ApiService) {
    this.rtmSvc = _globalRuntimeService;
    this.api = _api;
  }

  ngOnInit() {
    this.plc = new PlcParametriLive();
    this.getNormalTags();
    setInterval(()=>this.getNormalTags(), 2000);
  }

  getNormalTags(){
    this.api.getNormalTags().subscribe(
      (success)=>{
        this.plc.normalTags = success;
        
      },
      (err)=>{}
    );
  }
}

class Testi {
  liveMonitor = ["Live Monitor",""]
  recipes = ["Recipes",""]
}