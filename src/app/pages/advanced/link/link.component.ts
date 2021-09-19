import { Component,Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  templateUrl: 'link.component.html',
})
export class LinkComponent implements ViewCell, OnInit {
  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }


}
