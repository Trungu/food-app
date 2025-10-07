import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [loaded, error] = useFonts({
    "Inter-Black": require("../../assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf"),
    "Alan-Sans": require("../../assets/fonts/Alan_Sans/AlanSans-VariableFont_wght.ttf"),
  });

  console.log(`Fonts have ${loaded ? "sucessfully" : "not"} loaded`);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#5E936C" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: "Recipes",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              size={28}
              name={focused ? "food-drumstick" : "food-drumstick-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
