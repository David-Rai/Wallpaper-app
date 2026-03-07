import { images } from "../../constants/images.js";
import CustomButton from "../../components/CustomButton.jsx";
import { useState, useEffect } from "react";
import {
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
          className="w-[48%] h-[220px] rounded-xl overflow-hidden bg-gray-200 active:opacity-80"
        >
          <Image
            source={img}
            className="w-full h-full object-cover"
            resizeMode="cover"
          />
        </Pressable>
      ))}
      <Modal
        visible={showModal}
        presentationStyle="pageSheet"
        animationType="slide"
      >
        <TouchableOpacity onPress={() => setShowModal(false)}>
          <Text className="p-4 bg-purple-500 text-white m-3">Close</Text>
        </TouchableOpacity>
        <Image source={selectedImage} style={{ height: 100, width: 100 }} />
        <View>
          <TouchableOpacity>
            <Text>Download Image</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Home;
