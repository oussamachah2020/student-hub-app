import Animation from "@/components/lottiePlayer";
import { useRootNavigationState, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

type Props = {};

const index = (props: Props) => {
  const router = useRouter();
  const rootNavigation = useRootNavigationState();

  useEffect(() => {
    if (!rootNavigation) return;

    const redirection = setInterval(() => {
      router.replace("/sign-in");
    }, 5000);

    return () => clearInterval(redirection);
  }, [rootNavigation]);

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
