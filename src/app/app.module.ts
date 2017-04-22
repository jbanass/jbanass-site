import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LandingModule } from './landing/landing.module';
import { AboutModule } from './about/about.module';
import { ProjectContainerModule } from './project-container/project-container.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
    imports:    [
        BrowserModule,
        LandingModule,
        AboutModule,
        ProjectContainerModule,   
        FooterModule
    ],
    declarations: [ AppComponent ],
    bootstrap:  [ AppComponent ]
})
export class AppModule {

}