import { UserProfile } from "@clerk/nextjs";
import React from "react";

interface ProfilePageProps {}

const ProfilePage = ({}: ProfilePageProps) => {
  return <UserProfile path="/profile" />;
};

export default ProfilePage;
