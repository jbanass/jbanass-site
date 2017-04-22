import {Social} from '../model/social.model';

export class SocialService {
    socials: Array<Social> = [
        new Social('ion-social-facebook','https://www.facebook.com/joe.banass'),
        new Social('ion-social-twitter','https://twitter.com/josephbanass'),
        new Social('ion-social-linkedin','https://www.linkedin.com/in/joe-banass')
    ]
    
    getSocialLinks() : Array<Social> {
        return this.socials;
    }
}