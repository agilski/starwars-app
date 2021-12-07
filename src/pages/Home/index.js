import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginContext } from "../../utils/context/LoginContext";

export default function Home() {
  const Tab = createBottomTabNavigator();
  const { setIsLogin } = useContext(LoginContext);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>This is the Home page!</Text>
        <Button title="Log Out" onPress={() => setIsLogin(false)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "red",
    fontSize: 25,
    marginBottom: 25,
  },
});
