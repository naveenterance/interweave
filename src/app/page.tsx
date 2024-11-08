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

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: "20px" }}>
        <h2>Create User</h2>
        <UserForm />

        <h2>Update User</h2>
        <UserForm isEdit userId="USER_ID_HERE" />

        <h2>Delete User</h2>
        <DeleteUser />
      </div>
    </ApolloProvider>
  );
};

export default App;
