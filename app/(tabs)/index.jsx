import { images } from "../../constants/images.js";
import { useState, useEffect } from "react";
import { Pressable } from "react-native";
import { Modal } from "react-native";
import { View, Image } from "react-native";
import { ScrollView } from "react-native";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShow = (img) => {
    console.log("image pressed");
    setSelectedImage(img);
    setShowModal(true);
  };
  return (
    <ScrollView contentContainerClassName="p-4 flex-row flex-wrap gap-4 items-center justify-center">
      {images.map((img, index) => (
        <Pressable
          key={index}
          onPress={() => handleShow(img)}
          className="h-[220] w-[45%] rounded-lg"
        >
          <Image
            source={img}
            className="flex-1"
            resizeMode="cover"
          />
        </Pressable>
      ))}
      <Modal visible={showModal}>
        <Image source={selectedImage} />
        <Text>MOdal hai ta shaty hary</Text>
      </Modal>
    </ScrollView>
  );
};

export default Home;
