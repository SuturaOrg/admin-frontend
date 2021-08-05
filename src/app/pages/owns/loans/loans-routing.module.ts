import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoansComponent } from './loans.component';
import { AdvancedComponent } from '../../advanced/advanced.component';
import { loansTableSettings} from './loans.table-settings';

const routes: Routes = [{
  path: '',
  component: LoansComponent,
  children: [
    {
      path: 'chosen',
      component: AdvancedComponent,
      data:loansTableSettings.chosen
    },
    {
      path: 'finished',
      component: AdvancedComponent,
      data:loansTableSettings.finished
    },
    {
      path: 'refunded',
      component: AdvancedComponent,
      data:loansTableSettings.refunded
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {
  
}
