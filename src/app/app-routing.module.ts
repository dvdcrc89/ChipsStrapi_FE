import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EeLandingPageComponent } from './pages/ee-landing-page/ee-landing-page.component';
import { ErLandingPageComponent } from './pages/er-landing-page/er-landing-page.component';


const routes: Routes = [
  { path: 'home', component: EeLandingPageComponent },
  { path: 'business', component: ErLandingPageComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
