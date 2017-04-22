import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';
import { SocialService } from '../service/social.service';
import { SocialModule } from '../social/social.module';

@NgModule({
    imports:    [ CommonModule, SocialModule ],
    declarations: [ FooterComponent ],
    providers: [ SocialService ],
    exports: [ FooterComponent ]
})
export class FooterModule {

}