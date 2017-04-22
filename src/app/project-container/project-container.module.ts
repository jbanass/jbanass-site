import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './project-container.routing';

import { ProjectContainerComponent } from './project-container.component';
import { ProjectModule } from '../project/project.module';
import { ProjectListModule } from '../project-list/project-list.module';
import { ProjectService } from '../service/project.service';
import { EmptyModule } from '../empty/empty.module';

@NgModule({
    imports: [
        CommonModule,
        ProjectListModule,
        ProjectModule,
        EmptyModule,
        routing
    ],
    declarations: [ ProjectContainerComponent ],
    providers: [ProjectService],
    exports: [ ProjectContainerComponent ]
})
export class ProjectContainerModule {

}