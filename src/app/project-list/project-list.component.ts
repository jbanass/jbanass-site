import { Component } from '@angular/core';
import {Router, RouterLink } from '@angular/router';
import {Project} from '../model/project.model';
import {ProjectService} from '../service/project.service';

@Component({
    selector: 'project-list',
    templateUrl: 'project-list.component.html'
})
export class ProjectListComponent {
    projects: Array<Project>;

    constructor(private _router: Router, private _projectService: ProjectService) {
        this.projects = this._projectService.getShowcaseProjects();
    }    

    route(project: Project) {
        console.log(project);
        this._router.navigate(['/project', project.name]);
    }
}