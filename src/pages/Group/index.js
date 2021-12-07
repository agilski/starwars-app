import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Group() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the group page!</Text>
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
