import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnsComponent } from './owns.component';
import { AdvancedComponent } from '../advanced/advanced.component';
import { ownsTableSettings } from './owns.table-settings';


const children: any = [{
  path: 'loans',
  loadChildren: () => import('./loans/loans.module')
    .then(m => m.LoansModule),
}];
const paths = ['funds', 'contributions', 'refunds', 'donations', 'parameters'];

for (const p of paths) {
  const obj = {
    path: p,
    component: AdvancedComponent,
    data: ownsTableSettings[p],
  };
  children.push(obj);
}
const routes: Routes = [{
  path: '',
  component: OwnsComponent,
  children: children,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnsRoutingModule {

}
