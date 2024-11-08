"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    console.log("Credential Response:", credentialResponse);

    // Extract the ID token (or other relevant information)
    const idToken = credentialResponse.credential;

    // Optionally, you can decode the ID token to get user information
    if (idToken) {
      const decodedToken = JSON.parse(atob(idToken.split(".")[1]));
      console.log("Decoded Token:", decodedToken);

      // Example: Extract user email, name, and other details
      const userEmail = decodedToken.email;
      const userName = decodedToken.name;
      const userPicture = decodedToken.picture;

      console.log("User Email:", userEmail);
      console.log("User Name:", userName);
      console.log("User Picture URL:", userPicture);
    }

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
