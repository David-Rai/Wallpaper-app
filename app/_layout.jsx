import "../global.css";
import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <Stack></Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
