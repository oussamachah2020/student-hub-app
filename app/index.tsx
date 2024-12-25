import Animation from "@/components/lottiePlayer";
import { isTokenExpired } from "@/utils/token-verifier";
import { useAuthStore } from "@/zustand/auth-store";
import { useRootNavigationState, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

type Props = {};

const index = (props: Props) => {
  const router = useRouter();
  const rootNavigation = useRootNavigationState();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!rootNavigation) return;

    const redirection = setInterval(() => {
      if (accessToken) {
        if (!isTokenExpired(accessToken)) {
          router.replace("/home");
        } else {
          router.replace("/sign-in");
        }
      } else {
        router.replace("/sign-in");
      }
    }, 5000);

    return () => clearInterval(redirection);
  }, [accessToken, rootNavigation]);

  return (
    <View style={styles.animationContainer}>
      <Animation file={require("../assets/splash-animation.json")} />
      {/* <Text
        style={{
          fontSize: 30,
          color: "#fff",
          fontWeight: "500",
        }}
      >
        Student Hub
      </Text> */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#F7931E",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 3,
  },
});
