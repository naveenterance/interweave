"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../../utils/db/apolloClient";
import UserForm from "./components/UserForm";
import DeleteUser from "./components/DeleteUser";
import UserList from "./components/UserList";
import LoginForm from "./components/LoginForm";
import LoginGoogle from "./components/LoginGoogle";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "@/utils/redux/store/Auth";

const Login: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_googleClientId!}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <div style={{ padding: "20px" }}>
            <LoginForm onLoginSuccess={() => console.log("login success")} />
            <LoginGoogle />

            <UserList />
          </div>
        </Provider>
      </ApolloProvider>
    </GoogleOAuthProvider>
  );
};

export default Login;
