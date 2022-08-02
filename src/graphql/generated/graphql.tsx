import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ChangePasswordInput = {
  confirmNewPassword: Scalars['String'];
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ChangeRoleInput = {
  adminSecretKey: Scalars['String'];
  newRole: UserRole;
  userID: Scalars['Int'];
};

export type Concept = {
  __typename?: 'Concept';
  author: User;
  course: Course;
  created_at: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Course = {
  __typename?: 'Course';
  concepts: Array<Concept>;
  created_at: Scalars['String'];
  id: Scalars['Int'];
  isPremium: Scalars['Boolean'];
  name: Scalars['String'];
  notes: Array<Note>;
  quotes: Array<Quote>;
  trivias: Array<Trivia>;
  updated_at: Scalars['String'];
};

export type CreateConceptInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateCourseInput = {
  isPremium: Scalars['Boolean'];
  name: Scalars['String'];
};

export type CreateNoteInput = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type CreateQuoteInput = {
  quoteAuthor: Scalars['String'];
  quoteContent: Scalars['String'];
};

export type CreateTimelineEventInput = {
  eventContent: Scalars['String'];
  eventDate: Scalars['String'];
  eventTitle: Scalars['String'];
};

export type CreateTimelineInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateTriviaInput = {
  exam: ExamList;
  feedback?: Maybe<Scalars['String']>;
  isFlashcard: Scalars['Boolean'];
  isTrivia: Scalars['Boolean'];
  statement: Scalars['String'];
};

export type CreateTriviasAnswerInput = {
  isTrue: Scalars['Boolean'];
  statement: Scalars['String'];
};

export enum ExamList {
  Final = 'FINAL',
  First = 'FIRST',
  Second = 'SECOND'
}

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserResponse = {
  __typename?: 'LoginUserResponse';
  access_token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Scalars['String'];
  changePasswordWithToken: Scalars['String'];
  changeUserRole: User;
  createConcept: Concept;
  createCourse: Course;
  createNote: Note;
  createQuote: Quote;
  createTimeline: Timeline;
  createTimelineEvent: TimelineEvent;
  createTrivia: Trivia;
  createTriviaAnswer: TriviasAnswer;
  deleteConcept: Concept;
  deleteCourse: Course;
  deleteNote: Note;
  deleteQuote: Quote;
  deleteTimeline: Timeline;
  deleteTrivia: Trivia;
  deleteTriviaAnswer: TriviasAnswer;
  deleteUserByID: Scalars['Boolean'];
  getInitPoint: Scalars['String'];
  loginUser: LoginUserResponse;
  registerUser: LoginUserResponse;
  removeTimelineEvent: TimelineEvent;
  sendRecoveryPasswordEmail: Scalars['String'];
  updateConcept: Concept;
  updateCourse: Course;
  updateNote: Note;
  updateQuote: Quote;
  updateTimeline: Timeline;
  updateTimelineEvent: TimelineEvent;
  updateTrivia: Trivia;
  updateTriviaAnswer: TriviasAnswer;
  upgradeCurrentUserAccount: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationChangePasswordWithTokenArgs = {
  recoveryPasswordWithToken: RecoveryPasswordWithTokenInput;
};


export type MutationChangeUserRoleArgs = {
  changeRoleInput: ChangeRoleInput;
};


export type MutationCreateConceptArgs = {
  course_id: Scalars['Int'];
  createConceptInput: CreateConceptInput;
};


export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput;
};


export type MutationCreateNoteArgs = {
  course_id: Scalars['Int'];
  createNoteInput: CreateNoteInput;
};


export type MutationCreateQuoteArgs = {
  course_id: Scalars['Int'];
  createQuoteInput: CreateQuoteInput;
};


export type MutationCreateTimelineArgs = {
  course_id: Scalars['Int'];
  createTimelineInput: CreateTimelineInput;
};


export type MutationCreateTimelineEventArgs = {
  createTimelineEventInput: CreateTimelineEventInput;
  timeline_id: Scalars['Int'];
};


export type MutationCreateTriviaArgs = {
  course_id: Scalars['Int'];
  createTriviaInput: CreateTriviaInput;
};


export type MutationCreateTriviaAnswerArgs = {
  createTriviasAnswerInput: CreateTriviasAnswerInput;
  trivia_id: Scalars['Int'];
};


export type MutationDeleteConceptArgs = {
  concept_id: Scalars['Int'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteNoteArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteQuoteArgs = {
  quote_id: Scalars['Int'];
};


export type MutationDeleteTimelineArgs = {
  timeline_id: Scalars['Int'];
};


export type MutationDeleteTriviaArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTriviaAnswerArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserByIdArgs = {
  userIdToDelete: Scalars['Int'];
};


export type MutationGetInitPointArgs = {
  user_id: Scalars['Float'];
};


export type MutationLoginUserArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  registerUserInput: SignupUserInput;
};


export type MutationRemoveTimelineEventArgs = {
  timelineEvent_id: Scalars['Int'];
};


export type MutationSendRecoveryPasswordEmailArgs = {
  email: Scalars['String'];
};


export type MutationUpdateConceptArgs = {
  concept_id: Scalars['Int'];
  updateConceptInput: UpdateConceptInput;
};


export type MutationUpdateCourseArgs = {
  course_id: Scalars['Int'];
  updateCourseInput: UpdateCourseInput;
};


export type MutationUpdateNoteArgs = {
  note_id: Scalars['Int'];
  updateNoteInput: UpdateNoteInput;
};


export type MutationUpdateQuoteArgs = {
  quote_id: Scalars['Int'];
  updateQuoteInput: UpdateQuoteInput;
};


export type MutationUpdateTimelineArgs = {
  timeline_id: Scalars['Int'];
  updateTimelineInput: UpdateTimelineInput;
};


export type MutationUpdateTimelineEventArgs = {
  timelineEvent_id: Scalars['Int'];
  updateTimelineEventInput: UpdateTimelineEventInput;
};


export type MutationUpdateTriviaArgs = {
  trivia_id: Scalars['Int'];
  updateTriviaInput: UpdateTriviaInput;
};


export type MutationUpdateTriviaAnswerArgs = {
  trivaAnswer_id: Scalars['Int'];
  updateTriviasAnswerInput: UpdateTriviasAnswerInput;
};

export type Note = {
  __typename?: 'Note';
  author: User;
  content: Scalars['String'];
  course: Course;
  created_at: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkIfUserHasApprovedPayments: Scalars['Boolean'];
  findAdminConceptsByCourse: Concept;
  findAllConcepts: Array<Concept>;
  findAllCourses: Array<Course>;
  findAllNotes: Array<Note>;
  findAllQuotes: Array<Quote>;
  findAllTimelineEvents: Array<TimelineEvent>;
  findAllTimelines: Array<Timeline>;
  findAllTrivias: Array<Trivia>;
  findAllTriviasAnswers: Array<TriviasAnswer>;
  findAllUsers: Array<User>;
  findConceptById: Concept;
  findConceptsByAuthor: Array<Concept>;
  findConceptsByCourse: Array<Concept>;
  findCourseByID: Course;
  findCurrentUser: User;
  findCurrentUserConceptsByCourse: Array<Note>;
  findCurrentUserQuotesByCourse: Array<Quote>;
  findCurrentUserRandomConceptByCourse: Concept;
  findCurrentUserRandomQuoteByCourse: Quote;
  findCurrentUserTimelinesByCourse: Array<Timeline>;
  findNoteById: Note;
  findNotesByAuthor: Array<Note>;
  findNotesByCourse: Array<Note>;
  findNotesByUser: Array<Quote>;
  findQuoteById: Quote;
  findRandomTimelineEvent: TimelineEvent;
  findTimelineById: Timeline;
  findTimelineEventById: TimelineEvent;
  findTimelineEventsByTimeline: TimelineEvent;
  findTriviaByID: Trivia;
  findTriviasAnswerByID: TriviasAnswer;
  findUserByID: User;
  getRandomFlashcardByParams: Trivia;
  getRandomTriviaByParams: Trivia;
};


export type QueryCheckIfUserHasApprovedPaymentsArgs = {
  user_id: Scalars['Float'];
};


export type QueryFindAdminConceptsByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindConceptByIdArgs = {
  trivia_id: Scalars['Int'];
};


export type QueryFindConceptsByAuthorArgs = {
  author_id: Scalars['Int'];
};


export type QueryFindConceptsByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindCourseByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindCurrentUserConceptsByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindCurrentUserQuotesByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindCurrentUserRandomConceptByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindCurrentUserRandomQuoteByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindCurrentUserTimelinesByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindNoteByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindNotesByAuthorArgs = {
  author_id: Scalars['Int'];
};


export type QueryFindNotesByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindNotesByUserArgs = {
  user_id: Scalars['Int'];
};


export type QueryFindQuoteByIdArgs = {
  quote_id: Scalars['Int'];
};


export type QueryFindRandomTimelineEventArgs = {
  timeline_id: Scalars['Int'];
};


export type QueryFindTimelineByIdArgs = {
  timeline_id: Scalars['Int'];
};


export type QueryFindTimelineEventByIdArgs = {
  timelineEvent_id: Scalars['Int'];
};


export type QueryFindTimelineEventsByTimelineArgs = {
  timeline_id: Scalars['Int'];
};


export type QueryFindTriviaByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindTriviasAnswerByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetRandomFlashcardByParamsArgs = {
  course_id: Scalars['Int'];
  exam?: Maybe<ExamList>;
};


export type QueryGetRandomTriviaByParamsArgs = {
  course_id: Scalars['Int'];
  exam?: Maybe<ExamList>;
};

export type Quote = {
  __typename?: 'Quote';
  course: Course;
  created_at: Scalars['String'];
  id: Scalars['Int'];
  quoteAuthor: Scalars['String'];
  quoteContent: Scalars['String'];
  updated_at: Scalars['String'];
  user: User;
};

export type RecoveryPasswordWithTokenInput = {
  access_token: Scalars['String'];
  confirmNewPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type SignupUserInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Timeline = {
  __typename?: 'Timeline';
  course: Course;
  created_at: Scalars['String'];
  description: Scalars['String'];
  events: Array<TimelineEvent>;
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['String'];
  user: User;
};

export type TimelineEvent = {
  __typename?: 'TimelineEvent';
  created_at: Scalars['String'];
  eventContent: Scalars['String'];
  eventDate: Scalars['String'];
  eventTitle: Scalars['String'];
  id: Scalars['Int'];
  timeline: Timeline;
  updated_at: Scalars['String'];
};

export type Trivia = {
  __typename?: 'Trivia';
  answers: Array<TriviasAnswer>;
  course: Course;
  created_at: Scalars['String'];
  exam: ExamList;
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isFlashcard: Scalars['Boolean'];
  isTrivia: Scalars['Boolean'];
  statement: Scalars['String'];
  updated_at: Scalars['String'];
};

export type TriviasAnswer = {
  __typename?: 'TriviasAnswer';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  isTrue: Scalars['Boolean'];
  statement: Scalars['String'];
  trivia: Trivia;
  updated_at: Scalars['String'];
};

export type UpdateConceptInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateCourseInput = {
  isPremium?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateNoteInput = {
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type UpdateQuoteInput = {
  quoteAuthor?: Maybe<Scalars['String']>;
  quoteContent?: Maybe<Scalars['String']>;
};

export type UpdateTimelineEventInput = {
  eventContent?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['String']>;
  eventTitle?: Maybe<Scalars['String']>;
};

export type UpdateTimelineInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateTriviaInput = {
  exam?: Maybe<ExamList>;
  feedback?: Maybe<Scalars['String']>;
  isFlashcard?: Maybe<Scalars['Boolean']>;
  isTrivia?: Maybe<Scalars['Boolean']>;
  statement?: Maybe<Scalars['String']>;
};

export type UpdateTriviasAnswerInput = {
  isTrue?: Maybe<Scalars['Boolean']>;
  statement?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  concepts: Array<Concept>;
  created_at: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  notes: Array<Note>;
  quotes: Array<Quote>;
  role: UserRole;
  timelines: Array<Timeline>;
  updated_at: Scalars['String'];
  username: Scalars['String'];
};

export enum UserRole {
  Admin = 'ADMIN',
  FreeUser = 'FREE_USER',
  PremiumUser = 'PREMIUM_USER'
}

export type UserSnnipetFragment = { __typename?: 'User', id: number, created_at: string, updated_at: string, username: string, email: string, role: UserRole };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginUserResponse', access_token: string, user: { __typename?: 'User', id: number, created_at: string, updated_at: string, username: string, email: string, role: UserRole } } };

export type SignupMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'LoginUserResponse', access_token: string, user: { __typename?: 'User', id: number, created_at: string, updated_at: string, username: string, email: string, role: UserRole } } };

export const UserSnnipetFragmentDoc = gql`
    fragment UserSnnipet on User {
  id
  created_at
  updated_at
  username
  email
  role
}
    `;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  loginUser(loginUserInput: {email: $email, password: $password}) {
    access_token
    user {
      ...UserSnnipet
    }
  }
}
    ${UserSnnipetFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {
  registerUser(
    registerUserInput: {username: $username, email: $email, password: $password, confirmPassword: $confirmPassword}
  ) {
    access_token
    user {
      ...UserSnnipet
    }
  }
}
    ${UserSnnipetFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;