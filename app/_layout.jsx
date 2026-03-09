import React from "react";
import { ThemeProvider } from "../context/themeProvider";
import "../global.css";
import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
// import { StatusBar } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colorScheme } from "nativewind";

export default function layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <StatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
          backgroundColor="transparent"
          translucent
        />
        <ThemeProvider>
          <Stack screenOptions={{ headerShown: false }}></Stack>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
