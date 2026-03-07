import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react-native";
import {
  ActivityIndicator,
  View,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ImageCard from "./ImageCard";

export default function ImagesRenderer({ images }) {
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShow = (img) => {
    // console.log("image pressed", img);
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <View>
      <FlatList
        data={images}
        numColumns={2}
        className="gap-4"
        keyExtractor={(item, i) => i}
        renderItem={({ item }) => (
          <ImageCard item={item} handleShow={handleShow} />
        )}
      />

      {/* ====Modal=== */}
      <Modal
        visible={showModal}
        presentationStyle="pageSheet"
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        {/* Header  */}
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={() => setShowModal(false)} className="">
            <FontAwesome
              name="close"
              color={"black"}
              className="m-5"
              size={20}
            />
          </TouchableOpacity>

          <FontAwesome
            name="heart-o"
            color={"black"}
            className="m-5"
            size={20}
          />
        </View>

        {isLoading && (
          <View className="flex-[4] items-center justify-center">
            <ActivityIndicator size={"large"} />
          </View>
        )}

        <Image
          source={selectedImage}
          style={{ flex: 4 }}
          resizeMode="cover"
          className="h-full w-full"
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
        />

        <View className="flex-[1]">
          <TouchableOpacity className="items-center justify-center">
            <Text className="p-4 font-semibold text-white m-3  rounded-md bg-black">
              Get Wallpaper
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
