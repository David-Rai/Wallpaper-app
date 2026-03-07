import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, Image } from "react-native"
import { Heart, Download } from "lucide-react-native";


export default function ImageCard({ item, handleShow }) {
  return (
    <Pressable
      onPress={() => handleShow(item)}
      className="w-[48%] h-[220] rounded-xl overflow-hidden bg-gray-200 active:opacity-80"
    >
      <Image
        source={item}
        className="w-full h-full object-cover"
        resizeMode="cover"
      />
      <Heart className="absolute bottom-0 left-0 m-2" name="heart" size={30} />
      <Download className="absolute bottom-0 right-0 m-2" name="download" size={30} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
