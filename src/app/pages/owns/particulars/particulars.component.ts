import { Component } from '@angular/core';
import {particularsTableSettings} from './particulars.table-settings';
import {AdvancedComponent} from '../../advanced/advanced.component';

@Component({
  selector: 'ngx-particulars',
  template: `
<ngx-advanced [data]="data"></ngx-advanced>  `,
})
export class ParticularsComponent {
  data = particularsTableSettings['particulars'];

}
