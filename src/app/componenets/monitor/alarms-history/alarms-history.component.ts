import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-alarms-history',
  templateUrl: './alarms-history.component.html',
  styleUrls: ['./alarms-history.component.css']
})
export class AlarmsHistoryComponent implements OnInit {

  private maxRow = 500;
  private _rowRequestCount = 5;
  
  get rowRequestCount(): number{
    return this._rowRequestCount;
  }

  set rowRequestCount(n: number){
    if (n > this.maxRow) n = this.maxRow;
    if (n < 0 ) n = 1;
    this._rowRequestCount = n;
  }
  obj: any;
  

  constructor(private _globalRuntimeService :GlobalRuntimeConfigService,
              private _api: ApiService) {
  }

  ngOnInit() {
    this.getUltimiAllarmi();
  }

  getUltimiAllarmi(){
    this._api.getAlarmsHistory(this.rowRequestCount).subscribe(
      (success)=>{
        this.obj = success;
      },
      (err)=>{}
    );
  }

}
