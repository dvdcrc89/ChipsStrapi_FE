import gql from "graphql-tag";

export const JOBS_QUERY =
    gql`
    query Jobs($limit:Int, $start: Int) {
        jobs(limit: $limit, start: $start) {
          Type,
          UID,
          id,
          description,
          payPerHour,
          position,
          restaurant {
            id,
            name,
            address,
            latitude,
            longitude
          }
          shift_date{
            id,
            date {
              Date,
              StartAt,
              EndAt
            }
          }
        },
        jobsConnection {
          aggregate {
            count
          }
        }
      } 
    `

  export const JOBS_APPLICATIONS =  gql`
    query BasicUsers($id: ID!) {
        basicUser(id:$id) {
        id,
        job_applications {
            id,
            job {
                id
            }
         }
        }
    } 
    `
  export const APPLY_MUTATION = gql`
  mutation CreateJobsApplication($basic_user:ID!, $job:ID!) {
    jobsApplicationToggle(input: { data:{job:$job, basic_user:$basic_user}})
  }`
  
  
  export const HAS_APPLIED = gql` 
  query HasAppliedToJob($jobid:ID!, $userid:ID!) {
      hasAppliedToJob(jobid: $jobid, userid: $userid)
  }`

