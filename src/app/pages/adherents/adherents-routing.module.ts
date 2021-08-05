import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdherentsComponent } from './adherents.component';
import { AdvancedComponent } from '../advanced/advanced.component';
import { adherentsTableSettings} from './adherents.table-settings';

const routes: Routes = [{
  path: '',
  component: AdherentsComponent,
  children: [
    {
      path: 'contributed',
      component: AdvancedComponent,
      data:adherentsTableSettings.contributed
    },
    {
      path: 'advanced',
      component: AdvancedComponent,
      data:adherentsTableSettings.advanced
    },
    {
      path: 'notContributed',
      component: AdvancedComponent,
      data:adherentsTableSettings.notContributed
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdherentsRoutingModule {
  
}
