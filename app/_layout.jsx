import React from "react";
import "../global.css";
import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <StatusBar style="light"/>
        <Stack screenOptions={{headerShown:false}}></Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
