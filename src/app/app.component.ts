import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng';

  tableData: {header: string[], data: any[]};

  ngOnInit(){
    this.tableData = {header: [], data: []};
    this.fakeGet();
  }

  fakeGet(){
    this.tableData.header = ["Id","TimeStamp","Value","Notes","Info"];

    for (let i = 0; i < 10; i++) {
      this.tableData.data.push([Math.random(), new Date(), Math.random(), "Note", "Info"]);
    }
  }
}