import { SignIn } from "@clerk/nextjs";
import React from "react";

interface SignInProps {}

const SignInPage = ({}: SignInProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
