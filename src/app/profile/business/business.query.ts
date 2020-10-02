import gql from 'graphql-tag';

export const GET_RESTAURANT_QUERY =
    gql`
    query BusinessUser($id:ID!) {
      businessUser(id:$id) {
        id,
        restaurant {
          id,
          name,
          website,
          address,
          latitude,
          longitude,
          bio,
          jobs {
            id,
            Type,
            description,
            payPerHour,
            position,
            created_at,
            job_applications {
              id,
              basic_user {
                id,
                profile {
                  id,
                  name,
                  profileImage,
                }
              }
            },
            shift_date{
              id,
              date{
                Date,
                StartAt,
                EndAt
              }
            }
          }
        }
      }
    }
  `