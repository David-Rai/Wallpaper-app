import React from "react";
import { ThemeProvider } from "../context/themeProvider";
import "../global.css";
import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colorScheme } from "nativewind";

export default function layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <ThemeProvider>
          <Stack screenOptions={{ headerShown: false }}></Stack>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
