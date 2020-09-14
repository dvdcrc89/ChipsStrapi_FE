import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PersonalLandingPageComponent } from './pages/personal-landing-page/personal-landing-page.component';
import { BusinessLandingPageComponent } from './pages/business-landing-page/business-landing-page.component';


const routes: Routes = [
  { path: 'personal', component: PersonalLandingPageComponent },
  { path: 'business', component: BusinessLandingPageComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
