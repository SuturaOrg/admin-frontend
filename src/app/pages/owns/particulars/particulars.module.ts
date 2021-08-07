import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../../@theme/theme.module';
import { AdvancedModule} from '../../advanced/advanced.module';
import { ParticularsComponent } from './particulars.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    AdvancedModule,
    Ng2SmartTableModule,
  ],
  declarations: [
   ParticularsComponent,
  ],
})
export class ParticularsModule { }
