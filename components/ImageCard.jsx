import { StyleSheet, Text, View } from "react-native";
import { Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, Image } from "react-native";
import { Heart, Download } from "lucide-react-native";

export default function ImageCard({ item, handleShow }) {
  const handleDownload = (img) => {
    console.log("Download this ", img);
    Alert.alert("Downloading this image ",img)
  };

  return (
    <Pressable
      onPress={() => handleShow(item)}
      className="w-[48%] h-[220] rounded-xl ml-2 mt-2 overflow-hidden bg-gray-200 active:opacity-80"
    >
      <Image
        source={item}
        className="w-full h-full object-cover"
        resizeMode="cover"
      />
      <FontAwesome
        className="absolute bottom-0 left-0 m-2 "
        color={"white"}
        name="heart-o"
        size={24}
        // onPress={}
      />
      <FontAwesome
        className="absolute bottom-0 right-0 m-2"
        color={"white"}
        name="download"
        size={24}
        onPress={() => handleDownload(item)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
