import {Component, Input} from '@angular/core';
import {Social} from '../model/social.model';
@Component({
    selector: "social",
    templateUrl: "social.component.html"
})
export class SocialComponent {
    @Input() social: Social;

    openLink() {
        window.open(this.social.link, "_blank");
    }
}