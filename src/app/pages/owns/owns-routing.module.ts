import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdvancedComponent} from '../advanced/advanced.component';
import {ownsTableSettings} from './owns.table-settings';
import {OwnsComponent} from './owns.component';


const children: any = [];
const paths = [{
  path: 'loans',
  children: ['chosen', 'finished','refunded'],
},
  {
    path: 'contributions',
    children: [],
  }];

for (const p of paths) {
  const obj = {
    path: p.path,
    component:!p.children.length?AdvancedComponent:null,
    children: p.children.map((j) => {
      return {
        path: j,
        component: AdvancedComponent,
        data: ownsTableSettings[p[j]],
      };
    }),
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
export class OwnsRoutingModule {

}
