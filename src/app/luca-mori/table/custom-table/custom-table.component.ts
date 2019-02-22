import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

  @Input('table-data') tableData: {header: [], data: []};

  

  constructor() { }

  ngOnInit() {
   
  }

}
