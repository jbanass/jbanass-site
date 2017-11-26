import {Component} from '@angular/core';

@Component({
    selector: 'landing',
    templateUrl: 'landing.component.html'
})
export class LandingComponent {
    private _firstName: string = "Joseph";
    private _lastName: string = "Banass";
    Specialization: string = "Full Stack Developer based in Chicago";
}