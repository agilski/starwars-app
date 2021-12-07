import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { LoginContext } from "../../utils/context/LoginContext";

export default function Login({ navigation }) {
  const { setIsLogin } = useContext(LoginContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the login page!</Text>
      <Button title="Authenticate Login" onPress={() => setIsLogin(true)} />
      <Button title="Register" onPress={() => navigation.navigate("SignUp")} />
    </View>
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
