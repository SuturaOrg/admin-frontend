import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnsComponent } from './owns.component';
import { AdvancedComponent } from '../advanced/advanced.component';
import { ownsTableSettings } from './owns.table-settings';
import { LoansComponent } from './loans/loans.component';
import { FundsComponent } from './funds/funds.component';

const routes: Routes = [{
  path: '',
  component: OwnsComponent,
  children: [
    {
      path: 'loans',
      loadChildren: () => import('./loans/loans.module')
        .then(m => m.LoansModule)
    },
    {
      path: 'funds',
      component: AdvancedComponent,
      data: ownsTableSettings.funds
    },
    {
      path: 'contributions',
      component: AdvancedComponent,
      data: ownsTableSettings.funds,
    },
    {
      path: 'refunds',
      component: AdvancedComponent,
      data: ownsTableSettings.funds
    },
    {
      path: 'donations',
      component: AdvancedComponent,
      data: ownsTableSettings.funds
    },
    {
      path: 'parameters',
      component: AdvancedComponent,
      data: ownsTableSettings.funds
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnsRoutingModule {

}
