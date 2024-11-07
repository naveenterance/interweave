"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    setIsLoggedIn(true);
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const handleSignOut = () => {
    // Sign out from Google
    if (window.google) {
      window.google.accounts.id.revoke(
        "user-email@example.com", // Pass the user's email here if available
        (done) => {
          console.log("User revoked access");
          setIsLoggedIn(false);
        }
      );
    }
    console.log("User signed out");
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      )}
    </div>
  );
};

export default Login;
