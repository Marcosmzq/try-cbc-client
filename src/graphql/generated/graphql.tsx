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

export type Answer = {
  __typename?: 'Answer';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  isTrue: Scalars['Boolean'];
  statement: Scalars['String'];
  trivia: Trivia;
  trivia_id: Scalars['Int'];
  type: AnswerType;
  updated_at: Scalars['String'];
};

export enum AnswerType {
  Answer = 'ANSWER',
  Justification = 'JUSTIFICATION'
}

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

export type CreateAnswerInput = {
  isTrue: Scalars['Boolean'];
  statement: Scalars['String'];
  trivia_id: Scalars['Int'];
  type: AnswerType;
};

export type CreateTriviaInput = {
  exam: ExamList;
  feedback?: Maybe<Scalars['String']>;
  statement: Scalars['String'];
  subject: SubjectList;
};

export type CreateUserInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
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

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: User;
  changeUserRole: User;
  createAnswer: Answer;
  createTrivia: Trivia;
  createUser: Scalars['String'];
  deleteAnswer: Answer;
  deleteTrivia: Trivia;
  deleteUserByID: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  getInitPoint: Scalars['String'];
  loginUser: Scalars['String'];
  recoveryPassword: User;
  updateAnswer: Answer;
  updateTrivia: Trivia;
  upgradeUserAccount: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationChangeUserRoleArgs = {
  changeRoleInput: ChangeRoleInput;
};


export type MutationCreateAnswerArgs = {
  createAnswerInput: CreateAnswerInput;
};


export type MutationCreateTriviaArgs = {
  createTriviaInput: CreateTriviaInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteAnswerArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTriviaArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserByIdArgs = {
  id: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationGetInitPointArgs = {
  userID: Scalars['Float'];
};


export type MutationLoginUserArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRecoveryPasswordArgs = {
  recoveryPasswordInput: RecoveryPasswordInput;
};


export type MutationUpdateAnswerArgs = {
  updateAnswerInput: UpdateAnswerInput;
};


export type MutationUpdateTriviaArgs = {
  updateTriviaInput: UpdateTriviaInput;
};


export type MutationUpgradeUserAccountArgs = {
  userID: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  checkIfUserHasApprovedPayments: Scalars['Boolean'];
  findAllAnswers: Array<Answer>;
  findAllTrivias: Array<Trivia>;
  findAllUsers: Array<User>;
  findAnswerByID: Answer;
  findTriviaByID: Trivia;
  findUserByID: User;
  getRandomTriviaByParams: Trivia;
  getRandomTriviaBySubject: Trivia;
  getTriviaQuiz: Array<Trivia>;
};


export type QueryCheckIfUserHasApprovedPaymentsArgs = {
  userID: Scalars['Float'];
};


export type QueryFindAnswerByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindTriviaByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetRandomTriviaByParamsArgs = {
  exam: ExamList;
  subject: SubjectList;
};


export type QueryGetRandomTriviaBySubjectArgs = {
  subject: SubjectList;
};


export type QueryGetTriviaQuizArgs = {
  exam: ExamList;
  limit?: Maybe<Scalars['Int']>;
  subject: SubjectList;
};

export type RecoveryPasswordInput = {
  confirmNewPassword: Scalars['String'];
  newPassword: Scalars['String'];
  userToken: Scalars['String'];
};

export enum SubjectList {
  Icse = 'ICSE',
  Ipc = 'IPC'
}

export type Trivia = {
  __typename?: 'Trivia';
  answers: Array<Answer>;
  created_at: Scalars['String'];
  exam: ExamList;
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  statement: Scalars['String'];
  subject: SubjectList;
  updated_at: Scalars['String'];
};

export type UpdateAnswerInput = {
  id: Scalars['Int'];
  isTrue?: Maybe<Scalars['Boolean']>;
  statement?: Maybe<Scalars['String']>;
  trivia_id?: Maybe<Scalars['Int']>;
  type?: Maybe<AnswerType>;
};

export type UpdateTriviaInput = {
  exam?: Maybe<ExamList>;
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  statement?: Maybe<Scalars['String']>;
  subject?: Maybe<SubjectList>;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  role: UserRole;
  updated_at: Scalars['String'];
  username: Scalars['String'];
};

export enum UserRole {
  Admin = 'ADMIN',
  FreeUser = 'FREE_USER',
  PremiumUser = 'PREMIUM_USER'
}

export type TriviaAnswerSnippetFragment = { __typename?: 'Answer', id: number, created_at: string, updated_at: string, statement: string, isTrue: boolean, type: AnswerType };

export type TriviaSnippetFragment = { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, statement: string, exam: ExamList, subject: SubjectList, feedback?: string | null | undefined };

export type UserSnippetFragment = { __typename?: 'User', id: number, username: string, email: string, created_at: string, updated_at: string, role: UserRole };

export type ChangePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'User', id: number, username: string, email: string, created_at: string, updated_at: string, role: UserRole } };

export type CreateTriviaAnswerMutationVariables = Exact<{
  triviaID: Scalars['Int'];
  statement: Scalars['String'];
  isTrue: Scalars['Boolean'];
  type: AnswerType;
}>;


export type CreateTriviaAnswerMutation = { __typename?: 'Mutation', createAnswer: { __typename?: 'Answer', id: number, created_at: string, updated_at: string, statement: string, isTrue: boolean, type: AnswerType } };

export type CreateTriviaMutationVariables = Exact<{
  subject: SubjectList;
  exam: ExamList;
  statement: Scalars['String'];
  feedback?: Maybe<Scalars['String']>;
}>;


export type CreateTriviaMutation = { __typename?: 'Mutation', createTrivia: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, statement: string, exam: ExamList, subject: SubjectList, feedback?: string | null | undefined } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type GetCheckoutInitPointMutationVariables = Exact<{
  userID: Scalars['Float'];
}>;


export type GetCheckoutInitPointMutation = { __typename?: 'Mutation', getInitPoint: string };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: string };

export type RecoveryPasswordMutationVariables = Exact<{
  userToken: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
}>;


export type RecoveryPasswordMutation = { __typename?: 'Mutation', recoveryPassword: { __typename?: 'User', id: number, username: string, email: string, created_at: string, updated_at: string, role: UserRole } };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', createUser: string };

export type GetExerciseByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetExerciseByIdQuery = { __typename?: 'Query', findTriviaByID: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, statement: string, exam: ExamList, subject: SubjectList, feedback?: string | null | undefined, answers: Array<{ __typename?: 'Answer', id: number, created_at: string, updated_at: string, statement: string, isTrue: boolean, type: AnswerType }> } };

export type GetRandomTriviaByParamsQueryVariables = Exact<{
  exam: ExamList;
  subject: SubjectList;
}>;


export type GetRandomTriviaByParamsQuery = { __typename?: 'Query', getRandomTriviaByParams: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, statement: string, exam: ExamList, subject: SubjectList, feedback?: string | null | undefined, answers: Array<{ __typename?: 'Answer', id: number, created_at: string, updated_at: string, statement: string, isTrue: boolean, type: AnswerType }> } };

export type GetRandomTriviaBySubjectQueryVariables = Exact<{
  subject: SubjectList;
}>;


export type GetRandomTriviaBySubjectQuery = { __typename?: 'Query', getRandomTriviaBySubject: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, statement: string, exam: ExamList, subject: SubjectList, feedback?: string | null | undefined, answers: Array<{ __typename?: 'Answer', id: number, created_at: string, updated_at: string, statement: string, isTrue: boolean, type: AnswerType }> } };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', findUserByID: { __typename?: 'User', id: number, username: string, email: string, created_at: string, updated_at: string, role: UserRole } };

export type UpgradeUserAccountMutationVariables = Exact<{
  userID: Scalars['Float'];
}>;


export type UpgradeUserAccountMutation = { __typename?: 'Mutation', upgradeUserAccount: boolean };

export const TriviaAnswerSnippetFragmentDoc = gql`
    fragment TriviaAnswerSnippet on Answer {
  id
  created_at
  updated_at
  statement
  isTrue
  type
}
    `;
export const TriviaSnippetFragmentDoc = gql`
    fragment TriviaSnippet on Trivia {
  id
  created_at
  updated_at
  statement
  exam
  subject
  feedback
}
    `;
export const UserSnippetFragmentDoc = gql`
    fragment UserSnippet on User {
  id
  username
  email
  created_at
  updated_at
  role
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($currentPassword: String!, $newPassword: String!, $confirmNewPassword: String!) {
  changePassword(
    changePasswordInput: {currentPassword: $currentPassword, newPassword: $newPassword, confirmNewPassword: $confirmNewPassword}
  ) {
    ...UserSnippet
  }
}
    ${UserSnippetFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      currentPassword: // value for 'currentPassword'
 *      newPassword: // value for 'newPassword'
 *      confirmNewPassword: // value for 'confirmNewPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateTriviaAnswerDocument = gql`
    mutation CreateTriviaAnswer($triviaID: Int!, $statement: String!, $isTrue: Boolean!, $type: AnswerType!) {
  createAnswer(
    createAnswerInput: {trivia_id: $triviaID, statement: $statement, isTrue: $isTrue, type: $type}
  ) {
    ...TriviaAnswerSnippet
  }
}
    ${TriviaAnswerSnippetFragmentDoc}`;
export type CreateTriviaAnswerMutationFn = Apollo.MutationFunction<CreateTriviaAnswerMutation, CreateTriviaAnswerMutationVariables>;

/**
 * __useCreateTriviaAnswerMutation__
 *
 * To run a mutation, you first call `useCreateTriviaAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTriviaAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTriviaAnswerMutation, { data, loading, error }] = useCreateTriviaAnswerMutation({
 *   variables: {
 *      triviaID: // value for 'triviaID'
 *      statement: // value for 'statement'
 *      isTrue: // value for 'isTrue'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateTriviaAnswerMutation(baseOptions?: Apollo.MutationHookOptions<CreateTriviaAnswerMutation, CreateTriviaAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTriviaAnswerMutation, CreateTriviaAnswerMutationVariables>(CreateTriviaAnswerDocument, options);
      }
export type CreateTriviaAnswerMutationHookResult = ReturnType<typeof useCreateTriviaAnswerMutation>;
export type CreateTriviaAnswerMutationResult = Apollo.MutationResult<CreateTriviaAnswerMutation>;
export type CreateTriviaAnswerMutationOptions = Apollo.BaseMutationOptions<CreateTriviaAnswerMutation, CreateTriviaAnswerMutationVariables>;
export const CreateTriviaDocument = gql`
    mutation CreateTrivia($subject: SubjectList!, $exam: ExamList!, $statement: String!, $feedback: String) {
  createTrivia(
    createTriviaInput: {subject: $subject, exam: $exam, statement: $statement, feedback: $feedback}
  ) {
    ...TriviaSnippet
  }
}
    ${TriviaSnippetFragmentDoc}`;
export type CreateTriviaMutationFn = Apollo.MutationFunction<CreateTriviaMutation, CreateTriviaMutationVariables>;

/**
 * __useCreateTriviaMutation__
 *
 * To run a mutation, you first call `useCreateTriviaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTriviaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTriviaMutation, { data, loading, error }] = useCreateTriviaMutation({
 *   variables: {
 *      subject: // value for 'subject'
 *      exam: // value for 'exam'
 *      statement: // value for 'statement'
 *      feedback: // value for 'feedback'
 *   },
 * });
 */
export function useCreateTriviaMutation(baseOptions?: Apollo.MutationHookOptions<CreateTriviaMutation, CreateTriviaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTriviaMutation, CreateTriviaMutationVariables>(CreateTriviaDocument, options);
      }
export type CreateTriviaMutationHookResult = ReturnType<typeof useCreateTriviaMutation>;
export type CreateTriviaMutationResult = Apollo.MutationResult<CreateTriviaMutation>;
export type CreateTriviaMutationOptions = Apollo.BaseMutationOptions<CreateTriviaMutation, CreateTriviaMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const GetCheckoutInitPointDocument = gql`
    mutation GetCheckoutInitPoint($userID: Float!) {
  getInitPoint(userID: $userID)
}
    `;
export type GetCheckoutInitPointMutationFn = Apollo.MutationFunction<GetCheckoutInitPointMutation, GetCheckoutInitPointMutationVariables>;

/**
 * __useGetCheckoutInitPointMutation__
 *
 * To run a mutation, you first call `useGetCheckoutInitPointMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetCheckoutInitPointMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getCheckoutInitPointMutation, { data, loading, error }] = useGetCheckoutInitPointMutation({
 *   variables: {
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useGetCheckoutInitPointMutation(baseOptions?: Apollo.MutationHookOptions<GetCheckoutInitPointMutation, GetCheckoutInitPointMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetCheckoutInitPointMutation, GetCheckoutInitPointMutationVariables>(GetCheckoutInitPointDocument, options);
      }
export type GetCheckoutInitPointMutationHookResult = ReturnType<typeof useGetCheckoutInitPointMutation>;
export type GetCheckoutInitPointMutationResult = Apollo.MutationResult<GetCheckoutInitPointMutation>;
export type GetCheckoutInitPointMutationOptions = Apollo.BaseMutationOptions<GetCheckoutInitPointMutation, GetCheckoutInitPointMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  loginUser(loginUserInput: {email: $email, password: $password})
}
    `;
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
export const RecoveryPasswordDocument = gql`
    mutation RecoveryPassword($userToken: String!, $newPassword: String!, $confirmNewPassword: String!) {
  recoveryPassword(
    recoveryPasswordInput: {userToken: $userToken, newPassword: $newPassword, confirmNewPassword: $confirmNewPassword}
  ) {
    ...UserSnippet
  }
}
    ${UserSnippetFragmentDoc}`;
export type RecoveryPasswordMutationFn = Apollo.MutationFunction<RecoveryPasswordMutation, RecoveryPasswordMutationVariables>;

/**
 * __useRecoveryPasswordMutation__
 *
 * To run a mutation, you first call `useRecoveryPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecoveryPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recoveryPasswordMutation, { data, loading, error }] = useRecoveryPasswordMutation({
 *   variables: {
 *      userToken: // value for 'userToken'
 *      newPassword: // value for 'newPassword'
 *      confirmNewPassword: // value for 'confirmNewPassword'
 *   },
 * });
 */
export function useRecoveryPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RecoveryPasswordMutation, RecoveryPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RecoveryPasswordMutation, RecoveryPasswordMutationVariables>(RecoveryPasswordDocument, options);
      }
export type RecoveryPasswordMutationHookResult = ReturnType<typeof useRecoveryPasswordMutation>;
export type RecoveryPasswordMutationResult = Apollo.MutationResult<RecoveryPasswordMutation>;
export type RecoveryPasswordMutationOptions = Apollo.BaseMutationOptions<RecoveryPasswordMutation, RecoveryPasswordMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {
  createUser(
    createUserInput: {username: $username, email: $email, password: $password, confirmPassword: $confirmPassword}
  )
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetExerciseByIdDocument = gql`
    query GetExerciseByID($id: Int!) {
  findTriviaByID(id: $id) {
    ...TriviaSnippet
    answers {
      ...TriviaAnswerSnippet
    }
  }
}
    ${TriviaSnippetFragmentDoc}
${TriviaAnswerSnippetFragmentDoc}`;

/**
 * __useGetExerciseByIdQuery__
 *
 * To run a query within a React component, call `useGetExerciseByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExerciseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExerciseByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetExerciseByIdQuery(baseOptions: Apollo.QueryHookOptions<GetExerciseByIdQuery, GetExerciseByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExerciseByIdQuery, GetExerciseByIdQueryVariables>(GetExerciseByIdDocument, options);
      }
export function useGetExerciseByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExerciseByIdQuery, GetExerciseByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExerciseByIdQuery, GetExerciseByIdQueryVariables>(GetExerciseByIdDocument, options);
        }
export type GetExerciseByIdQueryHookResult = ReturnType<typeof useGetExerciseByIdQuery>;
export type GetExerciseByIdLazyQueryHookResult = ReturnType<typeof useGetExerciseByIdLazyQuery>;
export type GetExerciseByIdQueryResult = Apollo.QueryResult<GetExerciseByIdQuery, GetExerciseByIdQueryVariables>;
export const GetRandomTriviaByParamsDocument = gql`
    query GetRandomTriviaByParams($exam: ExamList!, $subject: SubjectList!) {
  getRandomTriviaByParams(exam: $exam, subject: $subject) {
    ...TriviaSnippet
    answers {
      ...TriviaAnswerSnippet
    }
  }
}
    ${TriviaSnippetFragmentDoc}
${TriviaAnswerSnippetFragmentDoc}`;

/**
 * __useGetRandomTriviaByParamsQuery__
 *
 * To run a query within a React component, call `useGetRandomTriviaByParamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRandomTriviaByParamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRandomTriviaByParamsQuery({
 *   variables: {
 *      exam: // value for 'exam'
 *      subject: // value for 'subject'
 *   },
 * });
 */
export function useGetRandomTriviaByParamsQuery(baseOptions: Apollo.QueryHookOptions<GetRandomTriviaByParamsQuery, GetRandomTriviaByParamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRandomTriviaByParamsQuery, GetRandomTriviaByParamsQueryVariables>(GetRandomTriviaByParamsDocument, options);
      }
export function useGetRandomTriviaByParamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRandomTriviaByParamsQuery, GetRandomTriviaByParamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRandomTriviaByParamsQuery, GetRandomTriviaByParamsQueryVariables>(GetRandomTriviaByParamsDocument, options);
        }
export type GetRandomTriviaByParamsQueryHookResult = ReturnType<typeof useGetRandomTriviaByParamsQuery>;
export type GetRandomTriviaByParamsLazyQueryHookResult = ReturnType<typeof useGetRandomTriviaByParamsLazyQuery>;
export type GetRandomTriviaByParamsQueryResult = Apollo.QueryResult<GetRandomTriviaByParamsQuery, GetRandomTriviaByParamsQueryVariables>;
export const GetRandomTriviaBySubjectDocument = gql`
    query GetRandomTriviaBySubject($subject: SubjectList!) {
  getRandomTriviaBySubject(subject: $subject) {
    ...TriviaSnippet
    answers {
      ...TriviaAnswerSnippet
    }
  }
}
    ${TriviaSnippetFragmentDoc}
${TriviaAnswerSnippetFragmentDoc}`;

/**
 * __useGetRandomTriviaBySubjectQuery__
 *
 * To run a query within a React component, call `useGetRandomTriviaBySubjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRandomTriviaBySubjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRandomTriviaBySubjectQuery({
 *   variables: {
 *      subject: // value for 'subject'
 *   },
 * });
 */
export function useGetRandomTriviaBySubjectQuery(baseOptions: Apollo.QueryHookOptions<GetRandomTriviaBySubjectQuery, GetRandomTriviaBySubjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRandomTriviaBySubjectQuery, GetRandomTriviaBySubjectQueryVariables>(GetRandomTriviaBySubjectDocument, options);
      }
export function useGetRandomTriviaBySubjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRandomTriviaBySubjectQuery, GetRandomTriviaBySubjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRandomTriviaBySubjectQuery, GetRandomTriviaBySubjectQueryVariables>(GetRandomTriviaBySubjectDocument, options);
        }
export type GetRandomTriviaBySubjectQueryHookResult = ReturnType<typeof useGetRandomTriviaBySubjectQuery>;
export type GetRandomTriviaBySubjectLazyQueryHookResult = ReturnType<typeof useGetRandomTriviaBySubjectLazyQuery>;
export type GetRandomTriviaBySubjectQueryResult = Apollo.QueryResult<GetRandomTriviaBySubjectQuery, GetRandomTriviaBySubjectQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserByID($id: Int!) {
  findUserByID(id: $id) {
    ...UserSnippet
  }
}
    ${UserSnippetFragmentDoc}`;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const UpgradeUserAccountDocument = gql`
    mutation UpgradeUserAccount($userID: Float!) {
  upgradeUserAccount(userID: $userID)
}
    `;
export type UpgradeUserAccountMutationFn = Apollo.MutationFunction<UpgradeUserAccountMutation, UpgradeUserAccountMutationVariables>;

/**
 * __useUpgradeUserAccountMutation__
 *
 * To run a mutation, you first call `useUpgradeUserAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpgradeUserAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upgradeUserAccountMutation, { data, loading, error }] = useUpgradeUserAccountMutation({
 *   variables: {
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useUpgradeUserAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpgradeUserAccountMutation, UpgradeUserAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpgradeUserAccountMutation, UpgradeUserAccountMutationVariables>(UpgradeUserAccountDocument, options);
      }
export type UpgradeUserAccountMutationHookResult = ReturnType<typeof useUpgradeUserAccountMutation>;
export type UpgradeUserAccountMutationResult = Apollo.MutationResult<UpgradeUserAccountMutation>;
export type UpgradeUserAccountMutationOptions = Apollo.BaseMutationOptions<UpgradeUserAccountMutation, UpgradeUserAccountMutationVariables>;