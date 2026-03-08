import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useTheme } from "../context/themeProvider";
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
  const { colors, isDark } = useTheme();

  const handleShow = (img) => {
    // console.log("image pressed", img);
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <View style={{ color: colors.text, backgroundColor: colors.background }}>
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
        <View
          className="flex-1"
          style={{ backgroundColor: colors.background, paddingHorizontal: 10 }}
        >
          {/* Header  */}
          <View className="flex-row justify-between">
            <TouchableOpacity onPress={() => setShowModal(false)} className="">
              <FontAwesome
                name="close"
                color={colors.text}
                className="m-5"
                size={20}
              />
            </TouchableOpacity>

            <FontAwesome
              name="heart-o"
              color={colors.text}
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
            className="h-full w-full rounded-xl"
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
          />

          <View className="flex-[1]">
            <TouchableOpacity className="items-center justify-center">
              <Text
                className="p-4 font-semibold m-3  rounded-md"
                style={{
                  color: colors.background,
                  backgroundColor: colors.text,
                }}
              >
                Get Wallpaper
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
