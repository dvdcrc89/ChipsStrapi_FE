import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from 'src/types/schema';
import { JobsListService } from './jobs-list.service';

@Component({
  selector: 'jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  /** Array of Jobs to display on page */
  public jobs$:       Observable<Jobs[]>

  /** Total number of jobs in all pages */
  public totalJobs$:  Observable<number>

  /** Starting index to pull Jobs */
  public cursor:      number = 0;

  /** Current shown page */
  public currentPage: number = 1;

  /** Number of Jobs per page */
  public itemPerPage: number = 4;
  
  /** User applications */
  public jobsApplication: {[key: number]: boolean} = {}

  constructor(
    private jobsListService: JobsListService,
  ) { }

  ngOnInit(): void {
    this.load();
    this.getTotalJobs();
    this.jobsListService.getJobsApplication().subscribe(
      jobsApplication  => {
        this.jobsApplication = jobsApplication
      }
    )
  }

  /**
   * Loads jobs
   */
  private load(): void {
    this.jobs$ = this.jobsListService.getJobs(this.itemPerPage, this.cursor);
  }

  /**
   * Gets total jobs number
   */
  private getTotalJobs(): void {
    this.totalJobs$ = this.jobsListService.getTotalJobs(this.itemPerPage, this.cursor)
  }

  /**
   * Changes page
   * @param page 
   */
  public changePage(page: number){
    this.cursor = (page-1)*this.itemPerPage;
    this.currentPage = page;
    this.load();
  }

  /**
   * Applys to job
   * @param job_id 
   */
  public applyToJob(job_id: string){
    this.jobsListService.applyToJob(job_id)
    .subscribe(({data: {jobsApplicationToggle}})=>{
      this.jobsApplication[job_id] = !!jobsApplicationToggle
    })
  }

}
