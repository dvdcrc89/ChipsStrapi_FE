import gql from "graphql-tag"

export const PROFILE_QUERY = gql`
    query BusinessUser($id: ID!) {
      businessUser(id:$id) {
        restaurant {
          name,
          id
        }
      }
    } 
  `
  
  
  export const JOB_MUTATION = gql`
      mutation CreateJob($job: JobInput) {
        createJob(input: { data: $job }) {
             job{
                id,
                Type,
                shift_date{
                date { 
                    Date,
                    StartAt,
                    EndAt
                  }
                },
                description,
                payPerHour,
                position    
             }  
        }
  }`
  
  export const SHIFT_MUTATION = gql`
  mutation CreateShiftDate($shift_date: ShiftDateInput) {
    createShiftDate(input: { data: $shift_date }) {
        shiftDate{
            id
         }  
    }
  }`