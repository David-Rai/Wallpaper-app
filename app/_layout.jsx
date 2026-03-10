import React from "react";
import { ThemeProvider } from "../context/themeProvider";
import "../global.css";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { colorScheme } from "nativewind";

export default function layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ThemeProvider>
          <StatusBar hidden />

          {/* <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={'red'}/> */}
          <Stack screenOptions={{ headerShown: false }}></Stack>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
