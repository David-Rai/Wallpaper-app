import { images } from "../../constants/images.js";
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
      {images.map((img, index) => (
        <Pressable
          key={index}
          onPress={() => handleShow(img)}
          className="w-[48%] h-[220px] rounded-xl overflow-hidden bg-gray-200 active:opacity-80"
        >
          <Image
            source={img}
            className="w-full h-full object-cover"
            resizeMode="cover"
          />
        </Pressable>
      ))}

      {/* ====Modal=== */}
      <Modal
        visible={showModal}
        presentationStyle="pageSheet"
        animationType="slide"
      >
        {/* Header  */}
        <View className="">
          <TouchableOpacity onPress={() => setShowModal(false)} className="">
              <FontAwesome name="close" color={"black"} className="m-5" size={20} />
          </TouchableOpacity>
        </View>

        <Image source={selectedImage} style={{ flex: 4 }} />

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
