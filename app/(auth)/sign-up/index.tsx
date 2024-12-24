import { register } from "@/api/auth";
import Animation from "@/components/lottiePlayer";
import { Tokens } from "@/types/auth";
import { useAuthStore } from "@/zustand/auth-store";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";

type Props = {};

const Page = (props: Props) => {
  const [visible, setIsVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setTokens } = useAuthStore();

  function togglePasswordVisibility() {
    setIsVisible((prev) => !prev);
  }

  function createAccount() {
    register(email, password)
      .then((data) => {
        if (data) {
          const tokens = data as Tokens;
          setTokens(tokens.accessToken, tokens.refreshToken);

          router.push("/setup");
        }
      })
      .catch((err) => console.error(err));
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
          <Text style={styles.title}>Hello</Text>
          <Text style={{ ...styles.title, color: "#000", marginTop: -10 }}>
            There
          </Text>
          <Text
            style={{ fontFamily: "Poppins-Regular", color: "rgba(0,0,0,0.6)" }}
          >
            Create an account to access all features and control everything in
            one place !
          </Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            outlineStyle={{
              borderRadius: 15,
            }}
            style={{
              backgroundColor: "#fff",
            }}
            onChangeText={(text) => setEmail(text)}
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

          <TextInput
            outlineStyle={{
              borderRadius: 15,
            }}
            onChangeText={(text) => setPassword(text)}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Checkbox
              theme={{
                mode: "adaptive",
                colors: {
                  outline: "rgba(0,0,0,0.6)",
                  background: "#F7931E",
                },
                roundness: 20,
              }}
              color="#F7931E"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                width: "85%",
                color: "rgba(0,0,0,0.7)",
              }}
            >
              By signing up, you agree to our{" "}
              <Text
                style={{ fontFamily: "Poppins-SemiBold", color: "#F7931E" }}
              >
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text
                style={{ fontFamily: "Poppins-SemiBold", color: "#F7931E" }}
              >
                Privacy Policy
              </Text>
            </Text>
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
            // disabled={!email || !password || password.length < 8}
            onPress={() => router.push("/setup")}
          >
            Sign Up
          </Button>
        </View>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            textAlign: "center",
            color: "rgba(0,0,0,0.7)",
          }}
        >
          Already have an account ?{" "}
          <Link
            href={"/sign-in"}
            style={{ color: "#F7931E", fontFamily: "Poppins-SemiBold" }}
          >
            Sign In
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
    gap: 15,
  },
  label: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 8,
    fontFamily: "Poppins-Medium",
  },
});
