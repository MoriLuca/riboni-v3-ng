import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';
import { PlcParametriLive } from 'src/app/models/plc/tags';

@Component({
  selector: 'app-alarms-tags',
  templateUrl: './alarms-tags.component.html',
  styleUrls: ['./alarms-tags.component.css']
})
export class AlarmsTagsComponent implements OnInit {

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
    this.getAlarmsTags();
    setInterval(()=>this.getAlarmsTags(), 5000);
  }

  getAlarmsTags(){
    this.api.getAlarmsTags().subscribe(
      (success)=>{
        this.plc.alarmsTags = success;
        
      },
      (err)=>{}
    );
  }

}

class Testi {
  liveMonitor = ["Live Monitor",""]
  recipes = ["Recipes",""]
}