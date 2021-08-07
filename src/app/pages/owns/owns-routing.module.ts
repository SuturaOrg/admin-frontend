import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdvancedComponent} from '../advanced/advanced.component';
import {ownsTableSettings} from './owns.table-settings';
import {ParticularsComponent} from './particulars/particulars.component';

const baseChildren: {}[] = [{
  path: 'particulars',
  component: ParticularsComponent,
}];

function setChildren(base: {}[]) {
  const paths = [{
    path: 'loans',
    children: ['chosen', 'finished', 'refunded'],
  },
    {
      path: 'contributions',
      children: [],
    }];

  for (const group of paths) {
    const obj = {
      path: group.path,
      component: !group.children.length ? AdvancedComponent : null,
      data: !group.children.length ? ownsTableSettings[group.path] : null,
      children: group.children.map((child) => {
        return {
          path: child,
          component: AdvancedComponent,
          data: ownsTableSettings[group.path][child],
        };
      }),
    };
    base.push(obj);
  }
  return base;
}

const routes: Routes = [{
  path: '',
  children: setChildren(baseChildren),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnsRoutingModule {

}
