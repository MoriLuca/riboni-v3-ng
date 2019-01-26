import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';
import { PlcParametriLive } from 'src/app/models/plc/tags';

@Component({
  selector: 'app-utility-tags',
  templateUrl: './utility-tags.component.html',
  styleUrls: ['./utility-tags.component.css']
})
export class UtilityTagsComponent implements OnInit {

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
    this.getUtilityTags();

    setInterval(()=>this.getUtilityTags(), 1000);
  }

  getUtilityTags(){
    this.api.getUtilityTags().subscribe(
      (success)=>{
        this.plc.utilityTags = success;
        
      },
      (err)=>{}
    );
  }

}

class Testi {
  liveMonitor = ["Live Monitor",""]
  recipes = ["Recipes",""]
}
