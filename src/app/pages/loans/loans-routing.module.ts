import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoansComponent } from './loans.component';
import { ChosenComponent } from './chosen/chosen.component';
import { FinishedComponent } from './finished/finished.component';
import { RefundedComponent } from './refunded/refunded.component';

const routes: Routes = [{
  path: '',
  component: LoansComponent,
  children: [
    {
      path: 'chosen',
      component: ChosenComponent,
    },
    {
      path: 'finished',
      component: FinishedComponent,
    },
    {
      path: 'refunded',
      component: RefundedComponent,
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {
}
