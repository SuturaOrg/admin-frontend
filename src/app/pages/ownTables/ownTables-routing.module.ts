import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnTablesComponent } from './ownTabless.component';
import { AdvancedComponent } from '../advanced/advanced.component';
import { ownTablesTableSettings} from './ownTables.table-settings';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [{
  path: '',
  component: OwnTablesComponent,
  children: [
    {
      path: 'loans',
      component: LoansComponent,
    },
    {
      path: 'finished',
      component: AdvancedComponent,
      data:ownTablesTableSettings.finished
    },
    {
      path: 'refunded',
      component: AdvancedComponent,
      data:ownTablesTableSettings.refunded
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnTablesRoutingModule {
  
}
