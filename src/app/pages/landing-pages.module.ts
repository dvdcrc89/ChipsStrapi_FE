import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalLandingPageComponent } from './personal-landing-page/personal-landing-page.component';
import { BusinessLandingPageComponent } from './business-landing-page/business-landing-page.component';
import { LandingPagesRoutingModule } from './landing-pages.routing.module';
import { NavComponent } from '../components/shared/nav/nav.component';
import { FooterComponent } from '../components/shared/footer/footer.component';


@NgModule({
  declarations: [
    PersonalLandingPageComponent,
    BusinessLandingPageComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    LandingPagesRoutingModule
  ]
})
export class LandingModule { }
