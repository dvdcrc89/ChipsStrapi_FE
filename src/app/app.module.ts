import { AddJobComponent } from './add-job/add-job.component';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './service/auth-service/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NavbarComponent } from './navbar/navbar.component';
import { AvatarModule, AvatarConfig } from 'ngx-avatar';
import { NavbarService } from './navbar/navbar.service';
import { NavLinkComponent } from './navbar/nav-link/nav-link.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJobComponent,
    NavbarComponent,
    NavLinkComponent,
  ],
  imports: [
    AppRoutingModule,
    AvatarModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleAPI
    }),
  ],
  providers: [AuthService, NavbarService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},],

  bootstrap: [AppComponent]
})
export class AppModule { }
