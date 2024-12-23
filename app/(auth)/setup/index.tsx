import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Button } from "react-native-paper";

type Props = {};

const Page = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
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
  formContainer: {
    gap: 20,
  },
});
