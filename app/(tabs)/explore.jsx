import { StyleSheet, Text, View } from "react-native";
import ImagesRenderer from "../../components/ImagesRenderer";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { images } from "../../constants/images";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Anime" component={AnimeScreen} />
      <Tab.Screen name="Nature" component={NatureScreen} />
    </Tab.Navigator>
  );
}

function AnimeScreen() {
  return (
    <View>
      <ImagesRenderer images={images} />
    </View>
  );
}

function NatureScreen() {
  return (
    <View>
      <ImagesRenderer images={images} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default MyTabs;
