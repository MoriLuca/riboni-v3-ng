import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { PlcParametriLive, ITag} from 'src/app/models/plc/tags';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-live-monitor',
  templateUrl: './live-monitor.component.html',
  styleUrls: ['./live-monitor.component.css']
})
export class LiveMonitorComponent implements OnInit {

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
    this.getLiveValues();
    this.getCriticalValues();
    setInterval(()=>this.getLiveValues(), 2000);
    setInterval(()=>this.getCriticalValues(), 750);
  }

  getLiveValues(){
    this.api.getLiveValues().subscribe(
      (success)=>{
        this.plc.liveMonitor = success;
        
      },
      (err)=>{}
    );
  }

  getCriticalValues(){
    this.api.getCriticalValues().subscribe(
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