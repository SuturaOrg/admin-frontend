import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ContributedComponent } from './contributed/contributed.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { AdherentsRoutingModule } from './adherents-routing.module';
import { NotContributedComponent } from './notContributed/notContributed.component';
import { AdherentsComponent } from './adherents.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    AdherentsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
   AdvancedComponent,
   ContributedComponent,
   NotContributedComponent,
   AdherentsComponent,
  ],
})
export class AdherentsModule { }
