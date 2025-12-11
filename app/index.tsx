import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React from "react";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;

//////////////////////// Below redirect is working perfectly

// import { useAuth } from "@clerk/clerk-expo";
// import { Redirect } from "expo-router";
// import React, { useEffect, useState } from "react";

// const Home = () => {
//   const { isSignedIn, isLoaded } = useAuth();
//   const [redirectTo, setRedirectTo] = useState<any>("");

//   useEffect(() => {
//     if (!isLoaded) return; // wait until Clerk finishes loading

//     if (isSignedIn) {
//       setRedirectTo("/(root)/(tabs)/home");
//     } else {
//       setRedirectTo("/(auth)/welcome");
//     }
//   }, [isSignedIn, isLoaded]); // run when Clerk auth state finishes loading or changes

//   // While loading, render nothing or a splash screen
//   if (!redirectTo) return null;

//   return <Redirect href={redirectTo} />;
// };

// export default Home;
