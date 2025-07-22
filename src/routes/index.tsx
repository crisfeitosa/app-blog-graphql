import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../pages/Home";
import { AboutPost } from "../pages/AboutPost";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AboutPost" component={AboutPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
