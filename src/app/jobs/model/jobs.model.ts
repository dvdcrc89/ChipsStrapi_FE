import { Jobs, JobsConnection } from 'src/types/schema';

export type JobsWithCount = {
    jobs: Array<Jobs>,
    jobsConnection: JobsConnection
  }

export interface IGraphQLJobsList {
    data: JobsWithCount,
    loading: boolean,
    networkStatus: number,
    stale: boolean
}