import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth-service/auth.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { EeLandingPageComponent } from './pages/ee-landing-page/ee-landing-page.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ErLandingPageComponent } from './pages/er-landing-page/er-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EeLandingPageComponent,
    ErLandingPageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleAPI
    }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
