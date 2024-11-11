// import { GoogleOAuthProvider } from "@react-oauth/google";
// import Login from "./components/login";

// function App() {
//   return (
//     <GoogleOAuthProvider clientId={process.env.googleClientId!}>
//       <Login />
//     </GoogleOAuthProvider>
//   );
// }

// export default App;
"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./components/apolloClient";
import UserForm from "./components/UserForm";
import DeleteUser from "./components/DeleteUser";
import UserList from "./components/UserList";
import LoginForm from "./components/LoginForm";
import Login from "./components/login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./components/Store";

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_googleClientId!}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <div style={{ padding: "20px" }}>
            <LoginForm onLoginSuccess={() => console.log("login success")} />

            <Login />
            <UserList />
          </div>
        </Provider>
      </ApolloProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
