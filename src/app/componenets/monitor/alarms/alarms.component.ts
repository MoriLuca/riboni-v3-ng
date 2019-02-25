import { Component, OnInit } from '@angular/core';
import { ITag } from 'src/app/models/plc/tags';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit {

  private _alarms: ITag[] = [];
  private _query: string;
  constructor(private _rtmSvc :GlobalRuntimeConfigService,
    private _api: ApiService) {}
  

  ngOnInit() {
    this.poll();
    setInterval(()=>{this.poll()}, 2000);
  }

  poll(){
    this._api.getAlarms().subscribe((res)=>{
      this._alarms = res;
      console.log(this._alarms);
      
    });
  }

}
