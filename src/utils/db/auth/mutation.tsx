"use client";
import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      id
      name
      email
      avatar
      cart
    }
  }
`;
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      email
      avatar
      cart
    }
  }
`;
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
      avatar
      cart
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      avatar
      cart
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $avatar: String
    $cart: [String!]!
  ) {
    create(
      name: $name
      email: $email
      password: $password
      avatar: $avatar
      cart: $cart
    ) {
      id
      name
      email
      avatar
      cart
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: String!
    $name: String
    $password: String
    $avatar: String
    $cart: [String!]
  ) {
    update(
      id: $id
      name: $name
      password: $password
      avatar: $avatar
      cart: $cart
    ) {
      id
      name
      email
      avatar
      cart
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    delete(id: $id) {
      id
      name
      email
    }
  }
`;
