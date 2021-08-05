import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AdvancedModule} from '../advanced/advanced.module';
import { ownsRoutingModule } from './owns-routing.module';
import { ownsComponent } from './owns.component';

@NgModule({
  imports: [RouterModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    AdvancedModule,
    ownsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
   ownsComponent,
  ],
})
export class ownsModule { }
