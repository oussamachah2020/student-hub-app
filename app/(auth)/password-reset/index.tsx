import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <AntDesign
        name="leftcircleo"
        size={35}
        style={{ marginLeft: 20, marginTop: 20 }}
        color="black"
        onPress={() => router.back()}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/question-icon.jpeg")}
          style={{
            width: 400,
            height: 400,
          }}
        />
      </View>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Text style={styles.title}>It's</Text>
          <Text style={{ ...styles.title, color: "#000", marginTop: -10 }}>
            Okay
          </Text>
          <Text
            style={{ fontFamily: "Poppins-Regular", color: "rgba(0,0,0,0.6)" }}
          >
            You can make a new password anytime to stay on the same track !
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
            request reset e-mail
          </Button>
        </View>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    marginTop: -40,
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
