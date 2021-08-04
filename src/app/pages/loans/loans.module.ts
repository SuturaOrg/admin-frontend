import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ChosenComponent } from './chosen/chosen.component';
import { FinishedComponent } from './finished/finished.component';
import { LoansRoutingModule } from './loans-routing.module';
import { RefundedComponent } from './refunded/refunded.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    LoansRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
   FinishedComponent,
   ChosenComponent,
   RefundedComponent
  ],
})
export class LoansModule { }
