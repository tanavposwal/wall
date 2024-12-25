import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={View} />
      <Tab.Screen name="Liked" component={View} />
      <Tab.Screen name="Library" component={View} />
    </Tab.Navigator>
  );
}
