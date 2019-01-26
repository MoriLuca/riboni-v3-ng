import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { PlcParametriLive, ITag} from 'src/app/models/plc/tags';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

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
    this.getCriticalTags();
    this.getUtilityTags();
    this.getAlarmsTags();
    setInterval(()=>this.getNormalTags(), 2000);
    setInterval(()=>this.getCriticalTags(), 750);
    setInterval(()=>this.getUtilityTags(), 1000);
    setInterval(()=>this.getAlarmsTags(), 5000);
  }

  getNormalTags(){
    this.api.getNormalTags().subscribe(
      (success)=>{
        this.plc.normalTags = success;
        
      },
      (err)=>{}
    );
  }

  getCriticalTags(){
    this.api.getCriticalTags().subscribe(
      (success)=>{
        this.plc.criticalTags = success;
        
      },
      (err)=>{}
    );
  }

  getUtilityTags(){
    this.api.getUtilityTags().subscribe(
      (success)=>{
        this.plc.utilityTags = success;
        
      },
      (err)=>{}
    );
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