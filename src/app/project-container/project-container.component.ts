import {
  Component,
  ViewChild,
  ElementRef,
  AfterContentInit
} from "@angular/core";
import { RouterLink, Router, NavigationEnd } from "@angular/router";
import { ProjectService } from "../service/project.service";
import { Project } from "../model/project.model";

@Component({
  selector: "project-container",
  templateUrl: "project-container.component.html"
})
export class ProjectContainerComponent {
  isLoaded: Boolean = false;
  showForMobile: Boolean = false;
  projects: Array<Project>;

  constructor(
    private _router: Router,
    private _projectService: ProjectService
  ) {
    this._router.events.subscribe(res => this.handleEvent(res));
    this.projects = this._projectService.getShowcaseProjects();
  }

  handleEvent(res) {
    if (res instanceof NavigationEnd) {
      if (this.isLoaded) {
        let container = document.getElementById("container");

        var options: ScrollIntoViewOptions = {
          behavior: "smooth",
          block: "start"
        };

        container.scrollIntoView(options);
      } else {
        this.isLoaded = true;
      }
    }
  }

  isBaseRoute(): Boolean {
    return this._router.url === "/";
  }

  showProjects() {
    this.showForMobile = true;
  }

  showOrHideProjects(): Boolean {
    //true means we hide, false means we show

    if (!this.isBaseRoute() || !this.showForMobile) {
      return true;
    }

    return false;
  }
}
