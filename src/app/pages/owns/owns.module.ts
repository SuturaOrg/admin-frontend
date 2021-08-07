import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { OwnsRoutingModule } from './owns-routing.module';
import { OwnsComponent } from './owns.component';
import {AdvancedModule} from '../advanced/advanced.module';
import {ParticularsComponent} from './particulars/particulars.component';

@NgModule({
  imports: [
    ThemeModule,
    OwnsRoutingModule,
    Ng2SmartTableModule,
    AdvancedModule,
  ],
  declarations: [
   OwnsComponent,
    ParticularsComponent
  ],
})
export class OwnsModule { }
