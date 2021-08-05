import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AdvancedModule} from '../advanced/advanced.module';
import { OwnTablesRoutingModule } from './ownTables-routing.module';
import { OwnTablesComponent } from './ownTabless.component';

@NgModule({
  imports: [RouterModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    AdvancedModule,
    OwnTablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
   OwnTablesComponent,
  ],
})
export class OwnTablesModule { }
