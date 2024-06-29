import { SignUp } from "@clerk/nextjs";
import React from "react";

interface SignUpProps {}

const SignUpPage = ({}: SignUpProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
