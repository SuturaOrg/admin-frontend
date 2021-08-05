import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-loans', 
  template: `
  <router-outlet></router-outlet>
`,
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
