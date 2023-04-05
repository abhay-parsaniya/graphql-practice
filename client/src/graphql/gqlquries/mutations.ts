import { gql } from "apollo-server-core";

export const SIGNUP_USER = gql`
    mutation createNewUser($userNew: UserInput!){
        user:signupUser(userNew: $userNew){
            firstName
        }
    }
`