import { Component, OnInit, Input } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/globalRuntimeConfig/global-runtime-config.service';
import { ApiService } from 'src/app/services/api/api.service';
import { PlcParametriLive } from 'src/app/models/plc/tags';

@Component({
  selector: 'app-tags-groups',
  templateUrl: './tags-groups.component.html',
  styleUrls: ['./tags-groups.component.css']
})
export class TagsGroupsComponent implements OnInit {

  @Input('tag-group') tagGroup: string;
  @Input('polling-rate') pollingRate: number;

  private _plc = new PlcParametriLive; 
  private _query: string = "";
  
  constructor(private _rtmSvc: GlobalRuntimeConfigService,
              private _api: ApiService) {}


  ngOnInit() {
    this.pollingRate = this.pollingRate || 3000;
    console.log(`input -> ${this.tagGroup} | polling rate -> ${this.pollingRate}`);
    this.poll();
    setInterval(()=>{this.poll()}, this.pollingRate);
  }

  poll(){
    console.log("il nome delle tag passato al componente è ->" + this.tagGroup);
    this._api.getTagsByGroup(this.tagGroup).subscribe((res)=>{
      this._plc.normalTags = res;
      console.log(this._plc.normalTags);
      
    });
  }

  typsOf(obj){
    return typeof(obj);
  }
}
