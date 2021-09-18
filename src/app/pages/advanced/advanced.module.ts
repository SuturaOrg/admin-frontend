import { NgModule } from '@angular/core';
import {
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbTreeGridModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AdvancedComponent } from '../advanced/advanced.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import { LinkComponent } from './link/link.component';

@NgModule({
    imports: [
        NbCardModule,
        NbTreeGridModule,
        NbIconModule,
        NbInputModule,
        ThemeModule,
        Ng2SmartTableModule,
        NbListModule,
        NbButtonModule,
    ],
  declarations: [AdvancedComponent, ImageUploadComponent, LinkComponent ],
  exports: [AdvancedComponent],
})
export class AdvancedModule { }
