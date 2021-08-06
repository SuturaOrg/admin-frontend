import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { OwnsRoutingModule } from './owns-routing.module';
import { OwnsComponent } from './owns.component';
import {AdvancedModule} from '../advanced/advanced.module';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    OwnsRoutingModule,
    Ng2SmartTableModule,
    AdvancedModule,
  ],
  declarations: [
   OwnsComponent,
  ],
})
export class OwnsModule { }
