import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
import SignUp from "./src/pages/SignUp";
import Group from "./src/pages/Group";
import Login from "./src/pages/Login";
import { LoginContext } from "./src/utils/context/LoginContext";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <LoginContext.Provider value={{ setIsLogin }}>
      <NavigationContainer>
        {isLogin ? (
          <>
            <Tab.Navigator initialRouteName="Home">
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Group" component={Group} />
              <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
          </>
        ) : (
          <>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
    </LoginContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
