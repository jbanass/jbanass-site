import { Routes, RouterModule } from "@angular/router";

import { ProjectComponent } from "../project/project.component";
import { EmptyComponent } from "../empty/empty.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "p/:name", component: ProjectComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
