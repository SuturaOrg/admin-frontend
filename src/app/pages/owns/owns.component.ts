import { Component } from '@angular/core';
import {ownsTableSettings} from './owns.table-settings';

@Component({
  selector: 'ngx-owns',
  template: `<ngx-advanced [data]="data" ></ngx-advanced>`,
})
export class OwnsComponent {
  data = ownsTableSettings.chosen;
}
