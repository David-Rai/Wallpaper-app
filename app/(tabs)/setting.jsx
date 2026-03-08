import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "nativewind";
import { useTheme } from "../../context/themeProvider";
import React, { useState } from "react";

export default function setting() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const { colors, isDark } = useTheme();
  const toggleSwitch = () => setIsEnabled((previous) => !previous);

  const handleSwitch = () => {
    toggleSwitch();
    toggleColorScheme();
  };

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
      backgroundColor: colors.secondary,
      width: 100,
      paddingVertical: 20,
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      margin: 5,
      borderRadius: 10,
    },
  });


  return (
    <View
      className="flex-1"
      style={{ color: colors.text, backgroundColor: colors.background }}
    >
      <Text
        style={{ color: colors.text, padding: 20, fontSize: 24 }}
        className=""
      >
        Select Theme
      </Text>

      {/* Theme selection */}
      <View className="flex-row justify-center">
        <TouchableOpacity onPress={handleSwitch}>
          <Text style={styles.text}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSwitch}>
          <Text style={styles.text}>Light</Text>
        </TouchableOpacity>
      </View>

      {/* <Switch
        value={isEnabled}
        onValueChange={handleSwitch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      /> */}
    </View>
  );
}
