import { images } from "../../constants/images.js";
import ImageCard from "../../components/ImageCard.jsx";
import CustomButton from "../../components/CustomButton.jsx";
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

const Home = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShow = (img) => {
    // console.log("image pressed", img);
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <ScrollView contentContainerClassName="p-4 flex-row flex-wrap gap-4 items-center justify-center">
      {/* ===All the images== */}
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
      >
        {/* Header  */}
        <View className="">
          <TouchableOpacity onPress={() => setShowModal(false)} className="">
            <FontAwesome
              name="close"
              color={"black"}
              className="m-5"
              size={20}
            />
          </TouchableOpacity>
        </View>

        <Image
          source={selectedImage}
          style={{ flex: 4 }}
          resizeMode="cover h-full w-full"
        />

        <View className="flex-[1]">
          <TouchableOpacity className="items-center justify-center">
            <Text className="p-4 font-semibold text-white m-3  rounded-md bg-black">
              Get Wallpaper
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Home;
