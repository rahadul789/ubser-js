import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <Text className=" bg-slate-900 p-4 text-cyan-200">
        This is my home in tab
      </Text>
    </SafeAreaView>
  );
};

export default Home;
