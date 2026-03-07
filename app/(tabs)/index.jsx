import { images } from "../../constants/images.js";
import ImagesRenderer from "../../components/ImagesRenderer.jsx";
import ImageCard from "../../components/ImageCard.jsx";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import {
  ActivityIndicator,
  View,
  ScrollView,
  Text,
  Button,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="for you" component={HomeScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
    </Tab.Navigator>
  );
}

const LikedScreen = () => {
  return (
    <View>
      <ImagesRenderer images={images} />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <ScrollView contentContainerClassName="flex-row flex-wrap gap-4 items-center justify-center">
      {/* ===All the images== */}
      <ImagesRenderer images={images} />
    </ScrollView>
  );
};

export default MyTabs;
