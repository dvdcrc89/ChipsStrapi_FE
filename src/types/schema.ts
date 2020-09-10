export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the `full-date` format
   * outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: "AdminUser";
  id: Scalars["ID"];
  username?: Maybe<Scalars["String"]>;
};

export type ApplicantInput = {
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type Applicants = {
  __typename?: "Applicants";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type ApplicantsAggregator = {
  __typename?: "ApplicantsAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ApplicantsConnection = {
  __typename?: "ApplicantsConnection";
  values?: Maybe<Array<Maybe<Applicants>>>;
  groupBy?: Maybe<ApplicantsGroupBy>;
  aggregate?: Maybe<ApplicantsAggregator>;
};

export type ApplicantsConnectionCreated_At = {
  __typename?: "ApplicantsConnectionCreated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<ApplicantsConnection>;
};

export type ApplicantsConnectionCreated_By = {
  __typename?: "ApplicantsConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ApplicantsConnection>;
};

export type ApplicantsConnectionId = {
  __typename?: "ApplicantsConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ApplicantsConnection>;
};

export type ApplicantsConnectionUpdated_At = {
  __typename?: "ApplicantsConnectionUpdated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<ApplicantsConnection>;
};

export type ApplicantsConnectionUpdated_By = {
  __typename?: "ApplicantsConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ApplicantsConnection>;
};

export type ApplicantsGroupBy = {
  __typename?: "ApplicantsGroupBy";
  id?: Maybe<Array<Maybe<ApplicantsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ApplicantsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ApplicantsConnectionUpdated_At>>>;
  created_by?: Maybe<Array<Maybe<ApplicantsConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ApplicantsConnectionUpdated_By>>>;
};

export type BasicUser = {
  __typename?: "BasicUser";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  profile?: Maybe<Profile>;
  owner?: Maybe<UsersPermissionsUser>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  jobs_applications?: Maybe<Array<Maybe<JobsApplications>>>;
};

export type BasicUserJobs_ApplicationsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type BasicUserAggregator = {
  __typename?: "BasicUserAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type BasicUserConnection = {
  __typename?: "BasicUserConnection";
  values?: Maybe<Array<Maybe<BasicUser>>>;
  groupBy?: Maybe<BasicUserGroupBy>;
  aggregate?: Maybe<BasicUserAggregator>;
};

export type BasicUserConnectionCreated_At = {
  __typename?: "BasicUserConnectionCreated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<BasicUserConnection>;
};

export type BasicUserConnectionCreated_By = {
  __typename?: "BasicUserConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<BasicUserConnection>;
};

export type BasicUserConnectionId = {
  __typename?: "BasicUserConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<BasicUserConnection>;
};

export type BasicUserConnectionOwner = {
  __typename?: "BasicUserConnectionOwner";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<BasicUserConnection>;
};

export type BasicUserConnectionProfile = {
  __typename?: "BasicUserConnectionProfile";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<BasicUserConnection>;
};

export type BasicUserConnectionUpdated_At = {
  __typename?: "BasicUserConnectionUpdated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<BasicUserConnection>;
};

export type BasicUserConnectionUpdated_By = {
  __typename?: "BasicUserConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<BasicUserConnection>;
};

export type BasicUserGroupBy = {
  __typename?: "BasicUserGroupBy";
  id?: Maybe<Array<Maybe<BasicUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BasicUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BasicUserConnectionUpdated_At>>>;
  profile?: Maybe<Array<Maybe<BasicUserConnectionProfile>>>;
  owner?: Maybe<Array<Maybe<BasicUserConnectionOwner>>>;
  created_by?: Maybe<Array<Maybe<BasicUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<BasicUserConnectionUpdated_By>>>;
};

export type BasicUserInput = {
  profile?: Maybe<Scalars["ID"]>;
  jobs_applications?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  owner?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type  = {
  __typename?: "BusinessUser";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  restaurant?: Maybe<Restaurant>;
  owner?: Maybe<UsersPermissionsUser>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type BusinessUserAggregator = {
  __typename?: "BusinessUserAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type BusinessUserConnection = {
  __typename?: "BusinessUserConnection";
  values?: Maybe<Array<Maybe<BusinessUser>>>;
  groupBy?: Maybe<BusinessUserGroupBy>;
  aggregate?: Maybe<BusinessUserAggregator>;
};

export type BusinessUserConnectionCreated_At = {
  __typename?: "BusinessUserConnectionCreated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<BusinessUserConnection>;
};

export type BusinessUserConnectionCreated_By = {
  __typename?: "BusinessUserConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<BusinessUserConnection>;
};

export type BusinessUserConnectionId = {
  __typename?: "BusinessUserConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<BusinessUserConnection>;
};

export type BusinessUserConnectionOwner = {
  __typename?: "BusinessUserConnectionOwner";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<BusinessUserConnection>;
};

export type BusinessUserConnectionRestaurant = {
  __typename?: "BusinessUserConnectionRestaurant";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<BusinessUserConnection>;
};

export type BusinessUserConnectionUpdated_At = {
  __typename?: "BusinessUserConnectionUpdated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<BusinessUserConnection>;
};

export type BusinessUserConnectionUpdated_By = {
  __typename?: "BusinessUserConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<BusinessUserConnection>;
};

export type BusinessUserGroupBy = {
  __typename?: "BusinessUserGroupBy";
  id?: Maybe<Array<Maybe<BusinessUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BusinessUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BusinessUserConnectionUpdated_At>>>;
  restaurant?: Maybe<Array<Maybe<BusinessUserConnectionRestaurant>>>;
  owner?: Maybe<Array<Maybe<BusinessUserConnectionOwner>>>;
  created_by?: Maybe<Array<Maybe<BusinessUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<BusinessUserConnectionUpdated_By>>>;
};

export type BusinessUserInput = {
  restaurant?: Maybe<Scalars["ID"]>;
  owner?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type ComponentShiftDateShiftDateInput = {
  Date?: Maybe<Scalars["Date"]>;
  StartAt?: Maybe<Scalars["Time"]>;
  EndAt?: Maybe<Scalars["Time"]>;
};

export type ComponentShiftDateShiftDates = {
  __typename?: "ComponentShiftDateShiftDates";
  id: Scalars["ID"];
  Date?: Maybe<Scalars["Date"]>;
  StartAt?: Maybe<Scalars["Time"]>;
  EndAt?: Maybe<Scalars["Time"]>;
};

export type CreateApplicantInput = {
  data?: Maybe<ApplicantInput>;
};

export type CreateApplicantPayload = {
  __typename?: "createApplicantPayload";
  applicant?: Maybe<Applicants>;
};

export type CreateBasicUserInput = {
  data?: Maybe<BasicUserInput>;
};

export type CreateBasicUserPayload = {
  __typename?: "createBasicUserPayload";
  basicUser?: Maybe<BasicUser>;
};

export type CreateBusinessUserInput = {
  data?: Maybe<BusinessUserInput>;
};

export type CreateBusinessUserPayload = {
  __typename?: "createBusinessUserPayload";
  businessUser?: Maybe<BusinessUser>;
};

export type CreateJobInput = {
  data?: Maybe<JobInput>;
};

export type CreateJobPayload = {
  __typename?: "createJobPayload";
  job?: Maybe<Jobs>;
};

export type CreateJobsApplicationInput = {
  data?: Maybe<JobsApplicationInput>;
};

export type CreateJobsApplicationPayload = {
  __typename?: "createJobsApplicationPayload";
  jobsApplication?: Maybe<JobsApplications>;
};

export type CreateProfileInput = {
  data?: Maybe<ProfileInput>;
};

export type CreateProfilePayload = {
  __typename?: "createProfilePayload";
  profile?: Maybe<Profile>;
};

export type CreateRestaurantInput = {
  data?: Maybe<RestaurantInput>;
};

export type CreateRestaurantPayload = {
  __typename?: "createRestaurantPayload";
  restaurant?: Maybe<Restaurant>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: "createRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateShiftDateInput = {
  data?: Maybe<ShiftDateInput>;
};

export type CreateShiftDatePayload = {
  __typename?: "createShiftDatePayload";
  shiftDate?: Maybe<ShiftDate>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: "createUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteApplicantInput = {
  where?: Maybe<InputId>;
};

export type DeleteApplicantPayload = {
  __typename?: "deleteApplicantPayload";
  applicant?: Maybe<Applicants>;
};

export type DeleteBasicUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteBasicUserPayload = {
  __typename?: "deleteBasicUserPayload";
  basicUser?: Maybe<BasicUser>;
};

export type DeleteBusinessUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteBusinessUserPayload = {
  __typename?: "deleteBusinessUserPayload";
  businessUser?: Maybe<BusinessUser>;
};

export type DeleteJobInput = {
  where?: Maybe<InputId>;
};

export type DeleteJobPayload = {
  __typename?: "deleteJobPayload";
  job?: Maybe<Jobs>;
};

export type DeleteJobsApplicationInput = {
  where?: Maybe<InputId>;
};

export type DeleteJobsApplicationPayload = {
  __typename?: "deleteJobsApplicationPayload";
  jobsApplication?: Maybe<JobsApplications>;
};

export type DeleteProfileInput = {
  where?: Maybe<InputId>;
};

export type DeleteProfilePayload = {
  __typename?: "deleteProfilePayload";
  profile?: Maybe<Profile>;
};

export type DeleteRestaurantInput = {
  where?: Maybe<InputId>;
};

export type DeleteRestaurantPayload = {
  __typename?: "deleteRestaurantPayload";
  restaurant?: Maybe<Restaurant>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: "deleteRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteShiftDateInput = {
  where?: Maybe<InputId>;
};

export type DeleteShiftDatePayload = {
  __typename?: "deleteShiftDatePayload";
  shiftDate?: Maybe<ShiftDate>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: "deleteUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type EditApplicantInput = {
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditBasicUserInput = {
  profile?: Maybe<Scalars["ID"]>;
  jobs_applications?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  owner?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditBusinessUserInput = {
  restaurant?: Maybe<Scalars["ID"]>;
  owner?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditComponentShiftDateShiftDateInput = {
  id?: Maybe<Scalars["ID"]>;
  Date?: Maybe<Scalars["Date"]>;
  StartAt?: Maybe<Scalars["Time"]>;
  EndAt?: Maybe<Scalars["Time"]>;
};

export type EditFileInput = {
  name?: Maybe<Scalars["String"]>;
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash?: Maybe<Scalars["String"]>;
  ext?: Maybe<Scalars["String"]>;
  mime?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  url?: Maybe<Scalars["String"]>;
  previewUrl?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditJobInput = {
  UID?: Maybe<Scalars["String"]>;
  Type?: Maybe<Scalars["String"]>;
  restaurant?: Maybe<Scalars["ID"]>;
  shift_date?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  payPerHour?: Maybe<Scalars["Float"]>;
  position?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditJobsApplicationInput = {
  job?: Maybe<Scalars["ID"]>;
  basic_users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditProfileInput = {
  name?: Maybe<Scalars["String"]>;
  profileImage?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  cv?: Maybe<Scalars["String"]>;
  interests?: Maybe<Scalars["String"]>;
  basic_user?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditRestaurantInput = {
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  jobs?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  address?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  business_user?: Maybe<Scalars["ID"]>;
  website?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  profilePic?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditShiftDateInput = {
  date?: Maybe<Array<Maybe<EditComponentShiftDateShiftDateInput>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditUserInput = {
  username?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  basic_user?: Maybe<Scalars["ID"]>;
  business_user?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type FileInput = {
  name: Scalars["String"];
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  ext?: Maybe<Scalars["String"]>;
  mime: Scalars["String"];
  size: Scalars["Float"];
  url: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type InputId = {
  id: Scalars["ID"];
};

export type JobInput = {
  UID?: Maybe<Scalars["String"]>;
  Type?: Maybe<Scalars["String"]>;
  restaurant?: Maybe<Scalars["ID"]>;
  shift_date?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  payPerHour?: Maybe<Scalars["Float"]>;
  position?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type Jobs = {
  __typename?: "Jobs";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  UID?: Maybe<Scalars["String"]>;
  Type?: Maybe<Scalars["String"]>;
  restaurant?: Maybe<Restaurant>;
  shift_date?: Maybe<ShiftDate>;
  description?: Maybe<Scalars["String"]>;
  payPerHour?: Maybe<Scalars["Float"]>;
  position?: Maybe<Scalars["String"]>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type JobsAggregator = {
  __typename?: "JobsAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
  sum?: Maybe<JobsAggregatorSum>;
  avg?: Maybe<JobsAggregatorAvg>;
  min?: Maybe<JobsAggregatorMin>;
  max?: Maybe<JobsAggregatorMax>;
};

export type JobsAggregatorAvg = {
  __typename?: "JobsAggregatorAvg";
  payPerHour?: Maybe<Scalars["Float"]>;
};

export type JobsAggregatorMax = {
  __typename?: "JobsAggregatorMax";
  payPerHour?: Maybe<Scalars["Float"]>;
};

export type JobsAggregatorMin = {
  __typename?: "JobsAggregatorMin";
  payPerHour?: Maybe<Scalars["Float"]>;
};

export type JobsAggregatorSum = {
  __typename?: "JobsAggregatorSum";
  payPerHour?: Maybe<Scalars["Float"]>;
};

export type JobsApplicationInput = {
  job?: Maybe<Scalars["ID"]>;
  basic_users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type JobsApplications = {
  __typename?: "JobsApplications";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  job?: Maybe<Jobs>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  basic_users?: Maybe<Array<Maybe<BasicUser>>>;
};

export type JobsApplicationsBasic_UsersArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type JobsApplicationsAggregator = {
  __typename?: "JobsApplicationsAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type JobsApplicationsConnection = {
  __typename?: "JobsApplicationsConnection";
  values?: Maybe<Array<Maybe<JobsApplications>>>;
  groupBy?: Maybe<JobsApplicationsGroupBy>;
  aggregate?: Maybe<JobsApplicationsAggregator>;
};

export type JobsApplicationsConnectionCreated_At = {
  __typename?: "JobsApplicationsConnectionCreated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<JobsApplicationsConnection>;
};

export type JobsApplicationsConnectionCreated_By = {
  __typename?: "JobsApplicationsConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<JobsApplicationsConnection>;
};

export type JobsApplicationsConnectionId = {
  __typename?: "JobsApplicationsConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<JobsApplicationsConnection>;
};

export type JobsApplicationsConnectionJob = {
  __typename?: "JobsApplicationsConnectionJob";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<JobsApplicationsConnection>;
};

export type JobsApplicationsConnectionUpdated_At = {
  __typename?: "JobsApplicationsConnectionUpdated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<JobsApplicationsConnection>;
};

export type JobsApplicationsConnectionUpdated_By = {
  __typename?: "JobsApplicationsConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<JobsApplicationsConnection>;
};

export type JobsApplicationsGroupBy = {
  __typename?: "JobsApplicationsGroupBy";
  id?: Maybe<Array<Maybe<JobsApplicationsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<JobsApplicationsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<JobsApplicationsConnectionUpdated_At>>>;
  job?: Maybe<Array<Maybe<JobsApplicationsConnectionJob>>>;
  created_by?: Maybe<Array<Maybe<JobsApplicationsConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<JobsApplicationsConnectionUpdated_By>>>;
};

export type JobsConnection = {
  __typename?: "JobsConnection";
  values?: Maybe<Array<Maybe<Jobs>>>;
  groupBy?: Maybe<JobsGroupBy>;
  aggregate?: Maybe<JobsAggregator>;
};

export type JobsConnectionCreated_At = {
  __typename?: "JobsConnectionCreated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionCreated_By = {
  __typename?: "JobsConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionDescription = {
  __typename?: "JobsConnectionDescription";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionId = {
  __typename?: "JobsConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionPayPerHour = {
  __typename?: "JobsConnectionPayPerHour";
  key?: Maybe<Scalars["Float"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionPosition = {
  __typename?: "JobsConnectionPosition";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionRestaurant = {
  __typename?: "JobsConnectionRestaurant";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionShift_Date = {
  __typename?: "JobsConnectionShift_date";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionType = {
  __typename?: "JobsConnectionType";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionUid = {
  __typename?: "JobsConnectionUID";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionUpdated_At = {
  __typename?: "JobsConnectionUpdated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsConnectionUpdated_By = {
  __typename?: "JobsConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<JobsConnection>;
};

export type JobsGroupBy = {
  __typename?: "JobsGroupBy";
  id?: Maybe<Array<Maybe<JobsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<JobsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<JobsConnectionUpdated_At>>>;
  UID?: Maybe<Array<Maybe<JobsConnectionUid>>>;
  Type?: Maybe<Array<Maybe<JobsConnectionType>>>;
  restaurant?: Maybe<Array<Maybe<JobsConnectionRestaurant>>>;
  shift_date?: Maybe<Array<Maybe<JobsConnectionShift_Date>>>;
  description?: Maybe<Array<Maybe<JobsConnectionDescription>>>;
  payPerHour?: Maybe<Array<Maybe<JobsConnectionPayPerHour>>>;
  position?: Maybe<Array<Maybe<JobsConnectionPosition>>>;
  created_by?: Maybe<Array<Maybe<JobsConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<JobsConnectionUpdated_By>>>;
};

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | Applicants
  | ApplicantsConnection
  | ApplicantsAggregator
  | ApplicantsGroupBy
  | ApplicantsConnectionId
  | ApplicantsConnectionCreated_At
  | ApplicantsConnectionUpdated_At
  | ApplicantsConnectionCreated_By
  | ApplicantsConnectionUpdated_By
  | CreateApplicantPayload
  | UpdateApplicantPayload
  | DeleteApplicantPayload
  | BasicUser
  | BasicUserConnection
  | BasicUserAggregator
  | BasicUserGroupBy
  | BasicUserConnectionId
  | BasicUserConnectionCreated_At
  | BasicUserConnectionUpdated_At
  | BasicUserConnectionProfile
  | BasicUserConnectionOwner
  | BasicUserConnectionCreated_By
  | BasicUserConnectionUpdated_By
  | CreateBasicUserPayload
  | UpdateBasicUserPayload
  | DeleteBasicUserPayload
  | BusinessUser
  | BusinessUserConnection
  | BusinessUserAggregator
  | BusinessUserGroupBy
  | BusinessUserConnectionId
  | BusinessUserConnectionCreated_At
  | BusinessUserConnectionUpdated_At
  | BusinessUserConnectionRestaurant
  | BusinessUserConnectionOwner
  | BusinessUserConnectionCreated_By
  | BusinessUserConnectionUpdated_By
  | CreateBusinessUserPayload
  | UpdateBusinessUserPayload
  | DeleteBusinessUserPayload
  | JobsApplications
  | JobsApplicationsConnection
  | JobsApplicationsAggregator
  | JobsApplicationsGroupBy
  | JobsApplicationsConnectionId
  | JobsApplicationsConnectionCreated_At
  | JobsApplicationsConnectionUpdated_At
  | JobsApplicationsConnectionJob
  | JobsApplicationsConnectionCreated_By
  | JobsApplicationsConnectionUpdated_By
  | CreateJobsApplicationPayload
  | UpdateJobsApplicationPayload
  | DeleteJobsApplicationPayload
  | Jobs
  | JobsConnection
  | JobsAggregator
  | JobsAggregatorSum
  | JobsAggregatorAvg
  | JobsAggregatorMin
  | JobsAggregatorMax
  | JobsGroupBy
  | JobsConnectionId
  | JobsConnectionCreated_At
  | JobsConnectionUpdated_At
  | JobsConnectionUid
  | JobsConnectionType
  | JobsConnectionRestaurant
  | JobsConnectionShift_Date
  | JobsConnectionDescription
  | JobsConnectionPayPerHour
  | JobsConnectionPosition
  | JobsConnectionCreated_By
  | JobsConnectionUpdated_By
  | CreateJobPayload
  | UpdateJobPayload
  | DeleteJobPayload
  | Profile
  | ProfileConnection
  | ProfileAggregator
  | ProfileGroupBy
  | ProfileConnectionId
  | ProfileConnectionCreated_At
  | ProfileConnectionUpdated_At
  | ProfileConnectionName
  | ProfileConnectionProfileImage
  | ProfileConnectionCoverImage
  | ProfileConnectionMessage
  | ProfileConnectionBio
  | ProfileConnectionCv
  | ProfileConnectionInterests
  | ProfileConnectionBasic_User
  | ProfileConnectionCreated_By
  | ProfileConnectionUpdated_By
  | CreateProfilePayload
  | UpdateProfilePayload
  | DeleteProfilePayload
  | Restaurant
  | RestaurantConnection
  | RestaurantAggregator
  | RestaurantAggregatorSum
  | RestaurantAggregatorAvg
  | RestaurantAggregatorMin
  | RestaurantAggregatorMax
  | RestaurantGroupBy
  | RestaurantConnectionId
  | RestaurantConnectionCreated_At
  | RestaurantConnectionUpdated_At
  | RestaurantConnectionLatitude
  | RestaurantConnectionLongitude
  | RestaurantConnectionAddress
  | RestaurantConnectionUid
  | RestaurantConnectionName
  | RestaurantConnectionBusiness_User
  | RestaurantConnectionWebsite
  | RestaurantConnectionPhone
  | RestaurantConnectionBio
  | RestaurantConnectionProfilePic
  | RestaurantConnectionCreated_By
  | RestaurantConnectionUpdated_By
  | CreateRestaurantPayload
  | UpdateRestaurantPayload
  | DeleteRestaurantPayload
  | ShiftDate
  | ShiftDateConnection
  | ShiftDateAggregator
  | ShiftDateGroupBy
  | ShiftDateConnectionId
  | ShiftDateConnectionCreated_At
  | ShiftDateConnectionUpdated_At
  | ShiftDateConnectionCreated_By
  | ShiftDateConnectionUpdated_By
  | CreateShiftDatePayload
  | UpdateShiftDatePayload
  | DeleteShiftDatePayload
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileAggregatorSum
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMin
  | UploadFileAggregatorMax
  | UploadFileGroupBy
  | UploadFileConnectionId
  | UploadFileConnectionCreated_At
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionName
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionWidth
  | UploadFileConnectionHeight
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionCreated_By
  | UploadFileConnectionUpdated_By
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleConnectionCreated_By
  | UsersPermissionsRoleConnectionUpdated_By
  | CreateRolePayload
  | UpdateRolePayload
  | DeleteRolePayload
  | UsersPermissionsUser
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionName
  | UsersPermissionsUserConnectionBasic_User
  | UsersPermissionsUserConnectionBusiness_User
  | UsersPermissionsUserConnectionCreated_By
  | UsersPermissionsUserConnectionUpdated_By
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload
  | ComponentShiftDateShiftDates;

export type Mutation = {
  __typename?: "Mutation";
  createApplicant?: Maybe<CreateApplicantPayload>;
  updateApplicant?: Maybe<UpdateApplicantPayload>;
  deleteApplicant?: Maybe<DeleteApplicantPayload>;
  createBasicUser?: Maybe<CreateBasicUserPayload>;
  updateBasicUser?: Maybe<UpdateBasicUserPayload>;
  deleteBasicUser?: Maybe<DeleteBasicUserPayload>;
  createBusinessUser?: Maybe<CreateBusinessUserPayload>;
  updateBusinessUser?: Maybe<UpdateBusinessUserPayload>;
  deleteBusinessUser?: Maybe<DeleteBusinessUserPayload>;
  createJobsApplication?: Maybe<CreateJobsApplicationPayload>;
  updateJobsApplication?: Maybe<UpdateJobsApplicationPayload>;
  deleteJobsApplication?: Maybe<DeleteJobsApplicationPayload>;
  createJob?: Maybe<CreateJobPayload>;
  updateJob?: Maybe<UpdateJobPayload>;
  deleteJob?: Maybe<DeleteJobPayload>;
  createProfile?: Maybe<CreateProfilePayload>;
  updateProfile?: Maybe<UpdateProfilePayload>;
  deleteProfile?: Maybe<DeleteProfilePayload>;
  createRestaurant?: Maybe<CreateRestaurantPayload>;
  updateRestaurant?: Maybe<UpdateRestaurantPayload>;
  deleteRestaurant?: Maybe<DeleteRestaurantPayload>;
  createShiftDate?: Maybe<CreateShiftDatePayload>;
  updateShiftDate?: Maybe<UpdateShiftDatePayload>;
  deleteShiftDate?: Maybe<DeleteShiftDatePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationCreateApplicantArgs = {
  input?: Maybe<CreateApplicantInput>;
};

export type MutationUpdateApplicantArgs = {
  input?: Maybe<UpdateApplicantInput>;
};

export type MutationDeleteApplicantArgs = {
  input?: Maybe<DeleteApplicantInput>;
};

export type MutationCreateBasicUserArgs = {
  input?: Maybe<CreateBasicUserInput>;
};

export type MutationUpdateBasicUserArgs = {
  input?: Maybe<UpdateBasicUserInput>;
};

export type MutationDeleteBasicUserArgs = {
  input?: Maybe<DeleteBasicUserInput>;
};

export type MutationCreateBusinessUserArgs = {
  input?: Maybe<CreateBusinessUserInput>;
};

export type MutationUpdateBusinessUserArgs = {
  input?: Maybe<UpdateBusinessUserInput>;
};

export type MutationDeleteBusinessUserArgs = {
  input?: Maybe<DeleteBusinessUserInput>;
};

export type MutationCreateJobsApplicationArgs = {
  input?: Maybe<CreateJobsApplicationInput>;
};

export type MutationUpdateJobsApplicationArgs = {
  input?: Maybe<UpdateJobsApplicationInput>;
};

export type MutationDeleteJobsApplicationArgs = {
  input?: Maybe<DeleteJobsApplicationInput>;
};

export type MutationCreateJobArgs = {
  input?: Maybe<CreateJobInput>;
};

export type MutationUpdateJobArgs = {
  input?: Maybe<UpdateJobInput>;
};

export type MutationDeleteJobArgs = {
  input?: Maybe<DeleteJobInput>;
};

export type MutationCreateProfileArgs = {
  input?: Maybe<CreateProfileInput>;
};

export type MutationUpdateProfileArgs = {
  input?: Maybe<UpdateProfileInput>;
};

export type MutationDeleteProfileArgs = {
  input?: Maybe<DeleteProfileInput>;
};

export type MutationCreateRestaurantArgs = {
  input?: Maybe<CreateRestaurantInput>;
};

export type MutationUpdateRestaurantArgs = {
  input?: Maybe<UpdateRestaurantInput>;
};

export type MutationDeleteRestaurantArgs = {
  input?: Maybe<DeleteRestaurantInput>;
};

export type MutationCreateShiftDateArgs = {
  input?: Maybe<CreateShiftDateInput>;
};

export type MutationUpdateShiftDateArgs = {
  input?: Maybe<UpdateShiftDateInput>;
};

export type MutationDeleteShiftDateArgs = {
  input?: Maybe<DeleteShiftDateInput>;
};

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};

export type MutationUploadArgs = {
  refId?: Maybe<Scalars["ID"]>;
  ref?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  file: Scalars["Upload"];
};

export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars["ID"]>;
  ref?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  files: Array<Maybe<Scalars["Upload"]>>;
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
  code: Scalars["String"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type Profile = {
  __typename?: "Profile";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  name?: Maybe<Scalars["String"]>;
  profileImage?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  cv?: Maybe<Scalars["String"]>;
  interests?: Maybe<Scalars["String"]>;
  basic_user?: Maybe<BasicUser>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type ProfileAggregator = {
  __typename?: "ProfileAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ProfileConnection = {
  __typename?: "ProfileConnection";
  values?: Maybe<Array<Maybe<Profile>>>;
  groupBy?: Maybe<ProfileGroupBy>;
  aggregate?: Maybe<ProfileAggregator>;
};

export type ProfileConnectionBasic_User = {
  __typename?: "ProfileConnectionBasic_user";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionBio = {
  __typename?: "ProfileConnectionBio";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionCoverImage = {
  __typename?: "ProfileConnectionCoverImage";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionCreated_At = {
  __typename?: "ProfileConnectionCreated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionCreated_By = {
  __typename?: "ProfileConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionCv = {
  __typename?: "ProfileConnectionCv";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionId = {
  __typename?: "ProfileConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionInterests = {
  __typename?: "ProfileConnectionInterests";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionMessage = {
  __typename?: "ProfileConnectionMessage";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionName = {
  __typename?: "ProfileConnectionName";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionProfileImage = {
  __typename?: "ProfileConnectionProfileImage";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionUpdated_At = {
  __typename?: "ProfileConnectionUpdated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionUpdated_By = {
  __typename?: "ProfileConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileGroupBy = {
  __typename?: "ProfileGroupBy";
  id?: Maybe<Array<Maybe<ProfileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProfileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProfileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ProfileConnectionName>>>;
  profileImage?: Maybe<Array<Maybe<ProfileConnectionProfileImage>>>;
  coverImage?: Maybe<Array<Maybe<ProfileConnectionCoverImage>>>;
  message?: Maybe<Array<Maybe<ProfileConnectionMessage>>>;
  bio?: Maybe<Array<Maybe<ProfileConnectionBio>>>;
  cv?: Maybe<Array<Maybe<ProfileConnectionCv>>>;
  interests?: Maybe<Array<Maybe<ProfileConnectionInterests>>>;
  basic_user?: Maybe<Array<Maybe<ProfileConnectionBasic_User>>>;
  created_by?: Maybe<Array<Maybe<ProfileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ProfileConnectionUpdated_By>>>;
};

export type ProfileInput = {
  name?: Maybe<Scalars["String"]>;
  profileImage?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  cv?: Maybe<Scalars["String"]>;
  interests?: Maybe<Scalars["String"]>;
  basic_user?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type Query = {
  __typename?: "Query";
  applicant?: Maybe<Applicants>;
  applicants?: Maybe<Array<Maybe<Applicants>>>;
  applicantsConnection?: Maybe<ApplicantsConnection>;
  basicUser?: Maybe<BasicUser>;
  basicUsers?: Maybe<Array<Maybe<BasicUser>>>;
  basicUsersConnection?: Maybe<BasicUserConnection>;
  businessUser?: Maybe<BusinessUser>;
  businessUsers?: Maybe<Array<Maybe<BusinessUser>>>;
  businessUsersConnection?: Maybe<BusinessUserConnection>;
  jobsApplication?: Maybe<JobsApplications>;
  jobsApplications?: Maybe<Array<Maybe<JobsApplications>>>;
  jobsApplicationsConnection?: Maybe<JobsApplicationsConnection>;
  job?: Maybe<Jobs>;
  jobs?: Maybe<Array<Maybe<Jobs>>>;
  jobsConnection?: Maybe<JobsConnection>;
  profile?: Maybe<Profile>;
  profiles?: Maybe<Array<Maybe<Profile>>>;
  profilesConnection?: Maybe<ProfileConnection>;
  restaurant?: Maybe<Restaurant>;
  restaurants?: Maybe<Array<Maybe<Restaurant>>>;
  restaurantsConnection?: Maybe<RestaurantConnection>;
  shiftDate?: Maybe<ShiftDate>;
  shiftDates?: Maybe<Array<Maybe<ShiftDate>>>;
  shiftDatesConnection?: Maybe<ShiftDateConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};

export type QueryApplicantArgs = {
  id: Scalars["ID"];
};

export type QueryApplicantsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryApplicantsConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryBasicUserArgs = {
  id: Scalars["ID"];
};

export type QueryBasicUsersArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryBasicUsersConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryBusinessUserArgs = {
  id: Scalars["ID"];
};

export type QueryBusinessUsersArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryBusinessUsersConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryJobsApplicationArgs = {
  id: Scalars["ID"];
};

export type QueryJobsApplicationsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryJobsApplicationsConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryJobArgs = {
  id: Scalars["ID"];
};

export type QueryJobsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryJobsConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryProfileArgs = {
  id: Scalars["ID"];
};

export type QueryProfilesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryProfilesConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryRestaurantArgs = {
  id: Scalars["ID"];
};

export type QueryRestaurantsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryRestaurantsConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryShiftDateArgs = {
  id: Scalars["ID"];
};

export type QueryShiftDatesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryShiftDatesConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryFilesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryRoleArgs = {
  id: Scalars["ID"];
};

export type QueryRolesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryUsersArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type Restaurant = {
  __typename?: "Restaurant";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  address?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  business_user?: Maybe<BusinessUser>;
  website?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  profilePic?: Maybe<UploadFile>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  jobs?: Maybe<Array<Maybe<Jobs>>>;
};

export type RestaurantJobsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type RestaurantAggregator = {
  __typename?: "RestaurantAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
  sum?: Maybe<RestaurantAggregatorSum>;
  avg?: Maybe<RestaurantAggregatorAvg>;
  min?: Maybe<RestaurantAggregatorMin>;
  max?: Maybe<RestaurantAggregatorMax>;
};

export type RestaurantAggregatorAvg = {
  __typename?: "RestaurantAggregatorAvg";
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
};

export type RestaurantAggregatorMax = {
  __typename?: "RestaurantAggregatorMax";
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
};

export type RestaurantAggregatorMin = {
  __typename?: "RestaurantAggregatorMin";
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
};

export type RestaurantAggregatorSum = {
  __typename?: "RestaurantAggregatorSum";
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
};

export type RestaurantConnection = {
  __typename?: "RestaurantConnection";
  values?: Maybe<Array<Maybe<Restaurant>>>;
  groupBy?: Maybe<RestaurantGroupBy>;
  aggregate?: Maybe<RestaurantAggregator>;
};

export type RestaurantConnectionAddress = {
  __typename?: "RestaurantConnectionAddress";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionBio = {
  __typename?: "RestaurantConnectionBio";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionBusiness_User = {
  __typename?: "RestaurantConnectionBusiness_user";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionCreated_At = {
  __typename?: "RestaurantConnectionCreated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionCreated_By = {
  __typename?: "RestaurantConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionId = {
  __typename?: "RestaurantConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionLatitude = {
  __typename?: "RestaurantConnectionLatitude";
  key?: Maybe<Scalars["Float"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionLongitude = {
  __typename?: "RestaurantConnectionLongitude";
  key?: Maybe<Scalars["Float"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionName = {
  __typename?: "RestaurantConnectionName";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionPhone = {
  __typename?: "RestaurantConnectionPhone";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionProfilePic = {
  __typename?: "RestaurantConnectionProfilePic";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionUid = {
  __typename?: "RestaurantConnectionUid";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionUpdated_At = {
  __typename?: "RestaurantConnectionUpdated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionUpdated_By = {
  __typename?: "RestaurantConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionWebsite = {
  __typename?: "RestaurantConnectionWebsite";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantGroupBy = {
  __typename?: "RestaurantGroupBy";
  id?: Maybe<Array<Maybe<RestaurantConnectionId>>>;
  created_at?: Maybe<Array<Maybe<RestaurantConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<RestaurantConnectionUpdated_At>>>;
  latitude?: Maybe<Array<Maybe<RestaurantConnectionLatitude>>>;
  longitude?: Maybe<Array<Maybe<RestaurantConnectionLongitude>>>;
  address?: Maybe<Array<Maybe<RestaurantConnectionAddress>>>;
  uid?: Maybe<Array<Maybe<RestaurantConnectionUid>>>;
  name?: Maybe<Array<Maybe<RestaurantConnectionName>>>;
  business_user?: Maybe<Array<Maybe<RestaurantConnectionBusiness_User>>>;
  website?: Maybe<Array<Maybe<RestaurantConnectionWebsite>>>;
  phone?: Maybe<Array<Maybe<RestaurantConnectionPhone>>>;
  bio?: Maybe<Array<Maybe<RestaurantConnectionBio>>>;
  profilePic?: Maybe<Array<Maybe<RestaurantConnectionProfilePic>>>;
  created_by?: Maybe<Array<Maybe<RestaurantConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<RestaurantConnectionUpdated_By>>>;
};

export type RestaurantInput = {
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  jobs?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  address?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  business_user?: Maybe<Scalars["ID"]>;
  website?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  profilePic?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type RoleInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type ShiftDate = {
  __typename?: "ShiftDate";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  date?: Maybe<Array<Maybe<ComponentShiftDateShiftDates>>>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type ShiftDateAggregator = {
  __typename?: "ShiftDateAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ShiftDateConnection = {
  __typename?: "ShiftDateConnection";
  values?: Maybe<Array<Maybe<ShiftDate>>>;
  groupBy?: Maybe<ShiftDateGroupBy>;
  aggregate?: Maybe<ShiftDateAggregator>;
};

export type ShiftDateConnectionCreated_At = {
  __typename?: "ShiftDateConnectionCreated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<ShiftDateConnection>;
};

export type ShiftDateConnectionCreated_By = {
  __typename?: "ShiftDateConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ShiftDateConnection>;
};

export type ShiftDateConnectionId = {
  __typename?: "ShiftDateConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ShiftDateConnection>;
};

export type ShiftDateConnectionUpdated_At = {
  __typename?: "ShiftDateConnectionUpdated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<ShiftDateConnection>;
};

export type ShiftDateConnectionUpdated_By = {
  __typename?: "ShiftDateConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ShiftDateConnection>;
};

export type ShiftDateGroupBy = {
  __typename?: "ShiftDateGroupBy";
  id?: Maybe<Array<Maybe<ShiftDateConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ShiftDateConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ShiftDateConnectionUpdated_At>>>;
  created_by?: Maybe<Array<Maybe<ShiftDateConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ShiftDateConnectionUpdated_By>>>;
};

export type ShiftDateInput = {
  date?: Maybe<Array<Maybe<ComponentShiftDateShiftDateInput>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type UpdateApplicantInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditApplicantInput>;
};

export type UpdateApplicantPayload = {
  __typename?: "updateApplicantPayload";
  applicant?: Maybe<Applicants>;
};

export type UpdateBasicUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBasicUserInput>;
};

export type UpdateBasicUserPayload = {
  __typename?: "updateBasicUserPayload";
  basicUser?: Maybe<BasicUser>;
};

export type UpdateBusinessUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBusinessUserInput>;
};

export type UpdateBusinessUserPayload = {
  __typename?: "updateBusinessUserPayload";
  businessUser?: Maybe<BusinessUser>;
};

export type UpdateJobInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditJobInput>;
};

export type UpdateJobPayload = {
  __typename?: "updateJobPayload";
  job?: Maybe<Jobs>;
};

export type UpdateJobsApplicationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditJobsApplicationInput>;
};

export type UpdateJobsApplicationPayload = {
  __typename?: "updateJobsApplicationPayload";
  jobsApplication?: Maybe<JobsApplications>;
};

export type UpdateProfileInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProfileInput>;
};

export type UpdateProfilePayload = {
  __typename?: "updateProfilePayload";
  profile?: Maybe<Profile>;
};

export type UpdateRestaurantInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRestaurantInput>;
};

export type UpdateRestaurantPayload = {
  __typename?: "updateRestaurantPayload";
  restaurant?: Maybe<Restaurant>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: "updateRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateShiftDateInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditShiftDateInput>;
};

export type UpdateShiftDatePayload = {
  __typename?: "updateShiftDatePayload";
  shiftDate?: Maybe<ShiftDate>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: "updateUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  name: Scalars["String"];
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  ext?: Maybe<Scalars["String"]>;
  mime: Scalars["String"];
  size: Scalars["Float"];
  url: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  related?: Maybe<Array<Maybe<Morph>>>;
};

export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UploadFileAggregator = {
  __typename?: "UploadFileAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: "UploadFileAggregatorAvg";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMax = {
  __typename?: "UploadFileAggregatorMax";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMin = {
  __typename?: "UploadFileAggregatorMin";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorSum = {
  __typename?: "UploadFileAggregatorSum";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
};

export type UploadFileConnection = {
  __typename?: "UploadFileConnection";
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: "UploadFileConnectionAlternativeText";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: "UploadFileConnectionCaption";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: "UploadFileConnectionCreated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_By = {
  __typename?: "UploadFileConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: "UploadFileConnectionExt";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: "UploadFileConnectionFormats";
  key?: Maybe<Scalars["JSON"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: "UploadFileConnectionHash";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: "UploadFileConnectionHeight";
  key?: Maybe<Scalars["Int"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: "UploadFileConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: "UploadFileConnectionMime";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: "UploadFileConnectionName";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: "UploadFileConnectionPreviewUrl";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: "UploadFileConnectionProvider";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: "UploadFileConnectionProvider_metadata";
  key?: Maybe<Scalars["JSON"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: "UploadFileConnectionSize";
  key?: Maybe<Scalars["Float"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: "UploadFileConnectionUpdated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_By = {
  __typename?: "UploadFileConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: "UploadFileConnectionUrl";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: "UploadFileConnectionWidth";
  key?: Maybe<Scalars["Int"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: "UploadFileGroupBy";
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<
    Array<Maybe<UploadFileConnectionProvider_Metadata>>
  >;
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>;
};

export type UserInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  basic_user?: Maybe<Scalars["ID"]>;
  business_user?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: "UserPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  id: Scalars["ID"];
  username: Scalars["String"];
  email: Scalars["String"];
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  id: Scalars["ID"];
  type: Scalars["String"];
  controller: Scalars["String"];
  action: Scalars["String"];
  enabled: Scalars["Boolean"];
  policy?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: "UsersPermissionsRoleAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: "UsersPermissionsRoleConnection";
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionCreated_By = {
  __typename?: "UsersPermissionsRoleConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: "UsersPermissionsRoleConnectionDescription";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: "UsersPermissionsRoleConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: "UsersPermissionsRoleConnectionName";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: "UsersPermissionsRoleConnectionType";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionUpdated_By = {
  __typename?: "UsersPermissionsRoleConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: "UsersPermissionsRoleGroupBy";
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>;
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  username: Scalars["String"];
  email: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<UsersPermissionsRole>;
  name?: Maybe<Scalars["String"]>;
  basic_user?: Maybe<BasicUser>;
  business_user?: Maybe<BusinessUser>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: "UsersPermissionsUserAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsUserConnection = {
  __typename?: "UsersPermissionsUserConnection";
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBasic_User = {
  __typename?: "UsersPermissionsUserConnectionBasic_user";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: "UsersPermissionsUserConnectionBlocked";
  key?: Maybe<Scalars["Boolean"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBusiness_User = {
  __typename?: "UsersPermissionsUserConnectionBusiness_user";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: "UsersPermissionsUserConnectionConfirmed";
  key?: Maybe<Scalars["Boolean"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: "UsersPermissionsUserConnectionCreated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_By = {
  __typename?: "UsersPermissionsUserConnectionCreated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: "UsersPermissionsUserConnectionEmail";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: "UsersPermissionsUserConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionName = {
  __typename?: "UsersPermissionsUserConnectionName";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: "UsersPermissionsUserConnectionProvider";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: "UsersPermissionsUserConnectionRole";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: "UsersPermissionsUserConnectionUpdated_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_By = {
  __typename?: "UsersPermissionsUserConnectionUpdated_by";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: "UsersPermissionsUserConnectionUsername";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: "UsersPermissionsUserGroupBy";
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsUserConnectionName>>>;
  basic_user?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBasic_User>>>;
  business_user?: Maybe<
    Array<Maybe<UsersPermissionsUserConnectionBusiness_User>>
  >;
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>;
};
