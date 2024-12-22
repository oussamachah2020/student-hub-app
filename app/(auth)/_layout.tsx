import { Stack } from "expo-router";
import React from "react";
import { Platform } from "react-native";

type Props = {};

const AuthLayout = (props: Props) => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          marginTop: Platform.OS === "ios" ? 50 : 45,
          backgroundColor: "#fff",
        },
      }}
    />
  );
};

export default AuthLayout;
