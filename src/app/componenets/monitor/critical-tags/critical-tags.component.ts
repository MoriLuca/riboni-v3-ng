import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';
import { PlcParametriLive } from 'src/app/models/plc/tags';

@Component({
  selector: 'app-critical-tags',
  templateUrl: './critical-tags.component.html',
  styleUrls: ['./critical-tags.component.css']
})
export class CriticalTagsComponent implements OnInit {

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
    this.getCriticalTags();
    setInterval(()=>this.getCriticalTags(), 750);
  }

  getCriticalTags(){
    this.api.getCriticalTags().subscribe(
      (success)=>{
        this.plc.criticalTags = success;
        
      },
      (err)=>{}
    );
  }

}

class Testi {
  liveMonitor = ["Live Monitor",""]
  recipes = ["Recipes",""]
}