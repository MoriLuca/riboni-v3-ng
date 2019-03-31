import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-tagli',
  templateUrl: './tagli.component.html',
  styleUrls: ['./tagli.component.css']
})
export class TagliComponent implements OnInit {

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

  header: any;
  tagli: any;
  txt = new Testi();
  rtmSvc : GlobalRuntimeConfigService;
  api : ApiService;
  

  constructor(_globalRuntimeService :GlobalRuntimeConfigService,
              _api: ApiService) {
    this.rtmSvc = _globalRuntimeService;
    this.api = _api;
  }

  ngOnInit() {
    this.getUltimiTagli();
  }

  getUltimiTagli(){
    this.api.getUltimiTagli(this.rowRequestCount).subscribe(
      (success)=>{
        this.tagli = success;
        console.log(this.tagli);
        console.log(Object.keys(this.tagli[0]));
        this.header = Object.keys(this.tagli[0]);
        
      },
      (err)=>{}
    );
  }

  typsOf(obj){
    return typeof(obj);
  }

}

class Testi {
  liveMonitor = ["Live Monitor",""]
  recipes = ["Recipes",""]
}