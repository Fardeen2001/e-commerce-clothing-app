"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const route = useRouter();
  const isLoggedInToken = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (!isLoggedInToken) {
      route.push("/");
    }
  }, [isLoggedInToken]);
  return <div>Profile</div>;
};

export default Profile;
