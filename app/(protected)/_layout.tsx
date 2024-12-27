import { Stack, Tabs } from "expo-router";
import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#F7931E",
        sceneStyle: {
          marginTop: Platform.OS === "ios" ? 50 : 45,
          marginLeft: 5,
          backgroundColor: "#fff",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons size={28} name="home" color={color} />;
            } else {
              return <Ionicons size={28} name="home-outline" color={color} />;
            }
          },
        }}
      />
      <Tabs.Screen
        name="classes/index"
        options={{
          title: "Classes",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons size={28} name="folder-sharp" color={color} />;
            } else {
              return <Ionicons size={28} name="folder-outline" color={color} />;
            }
          },
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FontAwesome name="user-circle" size={24} color={color} />;
            } else {
              return (
                <FontAwesome name="user-circle-o" size={24} color={color} />
              );
            }
          },
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
