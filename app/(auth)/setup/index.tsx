import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, TextInput } from "react-native-paper";
import PhoneInput, { ICountry } from "react-native-international-phone-number";
import { updateProfile } from "@/api/auth";
import { router, useLocalSearchParams } from "expo-router";

// Zod Validation Schema
const schema = z.object({
  username: z.string().min(1, "Username is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone number is required"), // Adjust validation as needed
});

type FormData = z.infer<typeof schema>;

const Page = () => {
  const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
  const { email } = useLocalSearchParams<{ email: string }>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }

  const onSubmit = (data: FormData) => {
    updateProfile(data, email)
      .then((data) => {
        if (data) {
          router.replace("/home");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Text style={styles.title}>Almost</Text>
        <Text style={{ ...styles.title, color: "#000", marginTop: -10 }}>
          there !
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 50,
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/empty-image-icon.png")}
            style={{
              width: 70,
              height: 70,
            }}
          />
        </View>
        <Button
          labelStyle={{
            color: "#F7931E",
            fontFamily: "Poppins-SemiBold",
          }}
        >
          Choose
        </Button>
      </View>
      <View style={{ gap: 10 }}>
        <Controller
          name="username"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              outlineStyle={{ borderRadius: 15 }}
              theme={{ colors: { primary: "#F7931E" } }}
              contentStyle={{ fontFamily: "Poppins-Medium" }}
              style={{ backgroundColor: "#fff" }}
              autoCapitalize="none"
              selectionColor="#F7931E"
              left={
                <TextInput.Icon
                  icon={"account-edit"}
                  color={"rgba(0,0,0,0.5)"}
                />
              }
              mode="outlined"
              placeholder="Enter your username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.username}
            />
          )}
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username.message}</Text>
        )}

        <Controller
          name="firstName"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              outlineStyle={{ borderRadius: 15 }}
              theme={{ colors: { primary: "#F7931E" } }}
              contentStyle={{ fontFamily: "Poppins-Medium" }}
              style={{ backgroundColor: "#fff" }}
              autoCapitalize="none"
              selectionColor="#F7931E"
              left={
                <TextInput.Icon icon={"account"} color={"rgba(0,0,0,0.5)"} />
              }
              mode="outlined"
              placeholder="Enter your first name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.firstName}
            />
          )}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName.message}</Text>
        )}

        <Controller
          name="lastName"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              outlineStyle={{ borderRadius: 15 }}
              theme={{ colors: { primary: "#F7931E" } }}
              contentStyle={{ fontFamily: "Poppins-Medium" }}
              style={{ backgroundColor: "#fff" }}
              autoCapitalize="none"
              selectionColor="#F7931E"
              left={
                <TextInput.Icon icon={"account"} color={"rgba(0,0,0,0.5)"} />
              }
              mode="outlined"
              placeholder="Enter your last name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.lastName}
            />
          )}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName.message}</Text>
        )}

        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <PhoneInput
              value={value}
              onBlur={onBlur}
              onChangePhoneNumber={onChange}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
              defaultCountry="MA"
            />
          )}
        />
        {errors.phone && (
          <Text style={styles.errorText}>{errors.phone.message}</Text>
        )}
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
        icon={"check"}
        onPress={handleSubmit(onSubmit)}
      >
        Done
      </Button>
    </View>
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: -8,
    fontFamily: "Poppins-Medium",
  },
});
