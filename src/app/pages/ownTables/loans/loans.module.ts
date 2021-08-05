import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../../@theme/theme.module';
import { AdvancedModule} from '../../advanced/advanced.module';
import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    RouterModule,
    ThemeModule,
    AdvancedModule,
    LoansRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
   LoansComponent,
  ],
})
export class LoansModule { }
