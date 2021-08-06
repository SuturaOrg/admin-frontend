import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedComponent } from '../../advanced/advanced.component';
import { loansTableSettings} from './loans.table-settings';

const children = [];
const paths = ['chosen', 'finished', 'refunded'];

for (const p of paths) {
  const obj = {
    path: p,
    component: AdvancedComponent,
    data: loansTableSettings[p],
  };
  children.push(obj);

}


const routes: Routes = [{
  path: '',
  children: children,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {

}
