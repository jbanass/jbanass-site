import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Project } from '../model/project.model';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import {ProjectService} from '../service/project.service';

@Component({
    selector: 'project',
    templateUrl: 'project.component.html'
})
export class ProjectComponent {
    @ViewChild('top') itemRef: ElementRef;
    @Input() project: Project;    

    constructor(private _route: ActivatedRoute, private _router: Router, private _projectService: ProjectService) {

    }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            this.project = this._projectService.findProject(params['name']);
        })        
    }

    openInGithub() {
        (this.project.githubLink != undefined) ? window.open(this.project.githubLink, '_blank') : null;
    }
}