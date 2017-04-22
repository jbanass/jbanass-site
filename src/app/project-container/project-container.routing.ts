import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from '../project/project.component';
import {EmptyComponent} from '../empty/empty.component';

const appRoutes: Routes = [
    { path: '', component: EmptyComponent },
    { path: 'p/:name', component: ProjectComponent }
];

export const routing = RouterModule.forRoot(appRoutes);