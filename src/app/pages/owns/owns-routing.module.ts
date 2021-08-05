import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnsComponent } from './owns.component';
import { AdvancedComponent } from '../advanced/advanced.component';
import { ownsTableSettings} from './owns.table-settings';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [{
  path: '',
  component: OwnsComponent,
  children: [
    {
      path: 'loans',
      component: LoansComponent,
    },
    {
      path: 'finished',
      component: AdvancedComponent,
      data:ownsTableSettings.finished
    },
    {
      path: 'refunded',
      component: AdvancedComponent,
      data:ownsTableSettings.refunded
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnsRoutingModule {
  
}
