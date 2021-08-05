import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoansComponent } from './loans.component';
import { AdvancedComponent } from '../../advanced/advanced.component';
import { loansTableSettings} from './loans.table-settings';

let children = [];
const paths = ['chosen', 'finished', 'refunded'];

for (let p of paths){
  let obj = {
    path: p,
    component: AdvancedComponent,
    data: loansTableSettings[p]
  };
  children.push(obj);

}


const routes: Routes = [{
  path: '',
  component: LoansComponent,
  children: children,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {
  
}
