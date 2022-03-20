// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Link from "next/link";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Link href="/route1">
        <Text>navigate to Route1</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
