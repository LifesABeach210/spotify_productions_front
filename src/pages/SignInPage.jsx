import React, { lazy, Suspense, useEffect } from "react";
import { Loading } from "../components/Loading";
import { LandingPage } from "./LandingPage";
export const SignInPage = (props) => {
  const SignIn = lazy(() => import("../components/SignIn"));
  return (
    <div className="sign-in-start">
      <LandingPage>
        <Suspense fallback={Loading}>
          <h2>Sign In</h2>
          <SignIn />
        </Suspense>
      </LandingPage>
    </div>
  );
};
