import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectListComponent } from './project-list.component';
import {ProjectService} from '../service/project.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [ ProjectListComponent ],
    providers: [ProjectService],
    exports: [ ProjectListComponent ]
})
export class ProjectListModule {

}