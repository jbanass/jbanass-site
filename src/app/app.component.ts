import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component ({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    constructor(private _title: Title) {
        this._title.setTitle('Joseph Banass - Full Stack Developer');
    }
}