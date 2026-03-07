import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: "top",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "For You",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="latest"
        options={{
          title: "Latest",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="clock-o" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="popular"
        options={{
          title: "Popular",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="star" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
