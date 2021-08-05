import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AdvancedModule} from '../advanced/advanced.module';
import { LoansComponent } from './loans/loans.component';
import { OwnsRoutingModule } from './owns-routing.module';
import { OwnsComponent } from './owns.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    AdvancedModule,
    OwnsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
   OwnsComponent,
   LoansComponent,
  ],
})
export class ownsModule { }
