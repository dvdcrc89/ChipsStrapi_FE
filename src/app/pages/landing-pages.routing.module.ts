import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalLandingPageComponent } from './personal-landing-page/personal-landing-page.component';
import { BusinessLandingPageComponent } from './business-landing-page/business-landing-page.component';


const routes: Routes = [
  { path: '', component: PersonalLandingPageComponent },
  { path: 'business', component: BusinessLandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPagesRoutingModule { }
