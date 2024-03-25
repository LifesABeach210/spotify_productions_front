import React, { useEffect, useState } from "react";
import { getAccessToken } from "../utils/Functions";
import { LandingPage } from "../pages/LandingPage";
const SignIn = ({ token, setToken }) => {
  useEffect(() => {
    getAccessToken();
    if (!localStorage.getItem("spotify_access_token")) {
      window.location.href = "http://localhost:8888/api/login";
    }
  }, [setToken, token]);
  return (
    <div className="main-screen-content">
      <div id="login-container">
        <div className="login">
          <a href="http://localhost:8888/api/login">login</a>
          <p className="login-desc">
            Please login to get access to spotify content.
          </p>

          <p className="login-desc-small">
            You will automatically be redirected to this page after login.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
