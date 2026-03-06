import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "For you",
          tabBarIcon: () => <FontAwesome name="home" size={30} />,
        }}
      />
      <Tabs.Screen
        name="explore/index"
        options={{
          title: "Explore",
          tabBarIcon: () => <FontAwesome name="search" size={30} />,
        }}
      />
      <Tabs.Screen
        name="account/index"
        options={{
          title: "Account",
          tabBarIcon: () => <FontAwesome name="user" size={30} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
