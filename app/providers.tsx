"use client";

import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
};

export default Providers;
