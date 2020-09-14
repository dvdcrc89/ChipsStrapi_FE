import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobcardComponent } from './UI/jobcard/jobcard.component';
import { JobMapComponent } from './UI/job-map/job-map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { JobPaginatorComponent } from './UI/job-paginator/job-paginator.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';


@NgModule({
  declarations: [JobcardComponent, JobsListComponent, JobMapComponent, JobPaginatorComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleAPI
    }),
  ]
})
export class JobsModule { }
