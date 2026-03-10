import { images } from "../../constants/images.js";
import ImagesRenderer from "../../components/ImagesRenderer.jsx";
import { useTheme } from "../../context/themeProvider.jsx";
import { useLikedStore } from "../../context/liked.js";
import { ActivityIndicator, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const { colors, isDark } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { color: colors.text },
        tabBarIndicatorStyle: {
          borderBottomWidth: 2,
          borderBottomColor: colors.primary,
        },
        tabBarStyle: { backgroundColor: colors.secondary },
      }}
    >
      <Tab.Screen name="For you" component={HomeScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
    </Tab.Navigator>
  );
}

const LikedScreen = () => {
  const { liked } = useLikedStore();
  const { colors } = useTheme();
  
  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      {liked.length > 0 ? (
        <ImagesRenderer images={liked} />
      ) : (
        <View className=" flex-1 items-center justify-start pt-10">
          <Text className="text-2xl" style={{ color: colors.text }}>
            No liked wallpapers
          </Text>
        </View>
      )}
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View contentContainerClassName="flex-row flex-wrap gap-4 items-center justify-center">
      {/* ===All the images== */}
      <ImagesRenderer images={images} />
    </View>
  );
};

export default MyTabs;
