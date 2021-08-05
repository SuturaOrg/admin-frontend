import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdherentsComponent } from './adherents.component';
import { ContributedComponent } from './contributed/contributed.component';
import { AdvancedComponent } from '../advanced/advanced.component';
import { NotContributedComponent } from './notContributed/notContributed.component';
import { adherentsTableSettings} from './adherents.table-settings';

const routes: Routes = [{
  path: '',
  component: AdherentsComponent,
  children: [
    {
      path: 'contributed',
      component: ContributedComponent,
    },
    {
      path: 'advanced',
      component: AdvancedComponent,
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
