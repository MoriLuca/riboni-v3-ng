import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-opcua',
  templateUrl: './opcua.component.html',
  styleUrls: ['./opcua.component.css']
})
export class OpcuaComponent implements OnInit {

  _opcuaBrowserResults = {};
  private _query: string = "";

  constructor(private _rtmSvc :GlobalRuntimeConfigService,
              private _api: ApiService) {
  }

  ngOnInit() {
    this._api.getOPCUABrowserResults().subscribe((res)=>{
       this._opcuaBrowserResults = res;
       console.log(this._opcuaBrowserResults);
       
    })
  }

}
