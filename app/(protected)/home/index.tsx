import { View, Text, Platform } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "ios" ? 50 : 45,
        paddingHorizontal: 10,
      }}
    >
      <Text>Home</Text>
    </View>
  );
}
