import {Component} from '@angular/core';
import {SocialComponent} from '../social/social.component';
import {SocialService} from '../service/social.service';
import {Social} from '../model/social.model';

@Component({
    selector: 'ng-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent {
    socials: Array<Social>;
    date = new Date().getFullYear();

    constructor(private _socialService: SocialService) {
        this.socials = this._socialService.getSocialLinks();
    }
}