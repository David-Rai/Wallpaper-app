import { FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";
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
  Alert,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ImageCard from "./ImageCard";
import * as MediaLibrary from "expo-media-library";
import { Directory, File, Paths } from "expo-file-system";

export default function ImagesRenderer({ images }) {
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { colors, isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const handleShow = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  //Getting the save permissions
  const handleDownload = async () => {
    try {
      if (!selectedImage) {
        Alert.alert("No image selected", "Please select an image first.");
        return;
      }

      // Request permission if not granted
      let permission = await requestPermission();

      if (permission.status !== "granted") {
        Alert.alert(
          "Permission required",
          "Cannot save image without photo permission.",
        );
        return; // Stop if permission denied
      }

      // Save image
      const fileName = `${Date.now()}.jpg`;
      const destination = new File(Paths.cache, fileName);

      const result = await File.downloadFileAsync(
        // "https://cataas.com/cat",
        // asset.uri,
        selectedImage,
        destination,
      );

      await MediaLibrary.createAssetAsync(result.uri);

      Alert.alert("Success", "Image saved successfully!");
    } catch (err) {
      Alert.alert("Error", err.message || "Something went wrong!");
    }
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
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={21}
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
            <View className="absolute items-center justify-center top-0 right-0 w-full h-full">
              <ActivityIndicator size={"large"} />
            </View>
          )}

          <Image
            source={{ uri: selectedImage }}
            style={{ flex: 4 }}
            resizeMode="cover"
            className="h-full w-full rounded-xl"
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
          />

          <View className="flex-[1]">
            <TouchableOpacity
              className="items-center justify-center"
              onPress={handleDownload}
            >
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
