// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPages from "./component/button/button.js";
import { Button } from "react-native-web";
import ForgetPassword from "./component/button/forget.js";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button tittle="Login" onPress={() => navigation.navigate("Login")} />
      <Button
        tittle="Forget Password"
        onPress={() => navigation.navigate("ForgetPassword")}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPages} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
//Navigation and Taskbar
