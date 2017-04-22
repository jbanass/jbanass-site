import {Component} from '@angular/core';
import {SocialComponent} from '../social/social.component';
import {SocialService} from '../service/social.service';
import {Social} from '../model/social.model';

@Component({
    selector: 'footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent {
    socials: Array<Social>;

    constructor(private _socialService: SocialService) {
        this.socials = this._socialService.getSocialLinks();
    }
}