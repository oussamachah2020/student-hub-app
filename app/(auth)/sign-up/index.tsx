import { register } from "@/api/auth";
import Animation from "@/components/lottiePlayer";
import { Tokens } from "@/types/auth";
import { useAuthStore } from "@/zustand/auth-store";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

type Props = {};

const FormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(64, { message: "Password should not surpass 64 charcters" }),
});

const Page = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [visible, setIsVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const { setTokens } = useAuthStore();

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    register(values.email, values.password)
      .then((data) => {
        if (data) {
          const tokens = data as Tokens;
          setTokens(tokens.accessToken, tokens.refreshToken);
          router.push({ pathname: "/setup", params: { email: values.email } });
        }
      })
      .catch((err) => console.error(err));
  };

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
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                outlineStyle={{
                  borderRadius: 15,
                }}
                style={{
                  backgroundColor: "#fff",
                }}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                contentStyle={{
                  fontFamily: "Poppins-Medium",
                }}
                autoCapitalize="none"
                keyboardType="email-address"
                spellCheck={false}
                autoCorrect={false}
                selectionColor="#F7931E"
                left={
                  <TextInput.Icon icon={"email"} color={"rgba(0,0,0,0.5)"} />
                }
                mode="outlined"
                placeholder="Enter your mail"
                theme={{ colors: { primary: "#F7931E" } }}
              />
            )}
            name="email"
          />
          {errors.email && <Text>This is required.</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                outlineStyle={{
                  borderRadius: 15,
                }}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
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
                left={
                  <TextInput.Icon icon={"lock"} color={"rgba(0,0,0,0.5)"} />
                }
                mode="outlined"
                placeholder="Enter your password"
              />
            )}
            name="password"
          />
          {errors.password && <Text>This is required.</Text>}

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
            disabled={!isValid || isSubmitting}
            onPress={handleSubmit(onSubmit)}
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
