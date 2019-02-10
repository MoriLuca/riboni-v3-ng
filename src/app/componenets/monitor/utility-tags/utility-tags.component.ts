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


  constructor(){}

  ngOnInit() {}


}