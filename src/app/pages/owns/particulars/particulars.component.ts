import { Component } from '@angular/core';
import {particularsTableSettings} from './particulars.table-settings';

@Component({
  selector: 'ngx-particulars',
  template: `
<ngx-advanced [data]="data"></ngx-advanced>  `,
})
export class ParticularsComponent {
  data = particularsTableSettings['particulars'];

}
