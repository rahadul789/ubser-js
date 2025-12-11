import { Redirect } from "expo-router";
import React from "react";

// This is for onbording and sign up, sign in page design

const Home = () => {
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
