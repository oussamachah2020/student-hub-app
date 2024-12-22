import Animation from "@/components/lottiePlayer";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

type Props = {};

const Page = (props: Props) => {
  const [visible, setIsVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsVisible((prev) => !prev);
  }

  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animation file={require("@/assets/waving.json")} />
      </View>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Text style={styles.title}>Welcome</Text>
          <Text style={{ ...styles.title, color: "#000", marginTop: -10 }}>
            Back
          </Text>
          <Text
            style={{ fontFamily: "Poppins-Regular", color: "rgba(0,0,0,0.6)" }}
          >
            Sign in to access your data and resume your work !
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View
            style={{
              gap: 6,
            }}
          >
            <TextInput
              outlineStyle={{
                borderRadius: 15,
              }}
              style={{
                backgroundColor: "#fff",
              }}
              contentStyle={{
                fontFamily: "Poppins-Medium",
              }}
              autoCapitalize="none"
              keyboardType="email-address"
              spellCheck={false}
              autoCorrect={false}
              selectionColor="#F7931E"
              left={<TextInput.Icon icon={"email"} color={"rgba(0,0,0,0.5)"} />}
              mode="outlined"
              placeholder="Enter your mail"
              theme={{ colors: { primary: "#F7931E" } }}
            />
          </View>
          <View
            style={{
              gap: 6,
            }}
          >
            <TextInput
              outlineStyle={{
                borderRadius: 15,
              }}
              theme={{ colors: { primary: "#F7931E" } }}
              contentStyle={{
                fontFamily: "Poppins-Medium",
              }}
              style={{
                backgroundColor: "#fff",
              }}
              autoCapitalize="none"
              secureTextEntry={!visible}
              right={
                <TextInput.Icon
                  icon={!visible ? "eye-off" : "eye"}
                  color={"rgba(0,0,0,0.5)"}
                  onPress={togglePasswordVisibility}
                />
              }
              selectionColor="#F7931E"
              left={<TextInput.Icon icon={"lock"} color={"rgba(0,0,0,0.5)"} />}
              mode="outlined"
              placeholder="Enter your password"
            />
          </View>
          <Button
            mode="contained"
            style={{
              backgroundColor: "#F7931E",
              borderRadius: 50,
              height: 52,
              justifyContent: "center",
            }}
            labelStyle={{
              fontWeight: "600",
              fontSize: 16,
              fontFamily: "Poppins-Medium",
            }}
            onPress={() => console.log("Pressed")}
          >
            Sign In
          </Button>
        </View>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            textAlign: "center",
            color: "rgba(0,0,0,0.7)",
          }}
        >
          Don't have an account ?{" "}
          <Link
            href={"/sign-up"}
            style={{ color: "#F7931E", fontFamily: "Poppins-SemiBold" }}
          >
            Create one
          </Link>
        </Text>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: "center",
    gap: 30,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 45,
    fontWeight: "500",
    textAlign: "center",
    color: "#F7931E",
    fontFamily: "Poppins-SemiBold",
  },
  formContainer: {
    gap: 20,
  },
  label: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 8,
    fontFamily: "Poppins-Medium",
  },
});
