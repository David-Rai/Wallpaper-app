import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "nativewind";
import { useTheme } from "../../context/themeProvider";
import React, { useState } from "react";

export default function Setting() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const { colors, isDark } = useTheme();

  const handleSwitch = () => {
    setIsEnabled((prev) => !prev);
    toggleColorScheme();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <Text style={[styles.heading, { color: colors.text }]}>Settings</Text>

      {/* Divider */}
      <View
        style={[styles.divider, { backgroundColor: colors.text, opacity: 0.1 }]}
      />

      {/* Theme Row */}
      <View style={[styles.row, { borderBottomColor: colors.text + "18" }]}>
        <View style={styles.rowLeft}>
          <Text style={[styles.rowLabel, { color: colors.text }]}>
            Light Mode
          </Text>
          <Text style={[styles.rowSub, { color: colors.text, opacity: 0.45 }]}>
            {isEnabled ? "On" : "Off"}
          </Text>
        </View>
        <Switch
          value={isEnabled}
          onValueChange={handleSwitch}
          trackColor={{ false: "#D1D1D6", true: colors.text }}
          thumbColor={"#FFFFFF"}
          ios_backgroundColor="#D1D1D6"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: -0.5,
    marginBottom: 24,
  },
  divider: {
    height: 1,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  rowLeft: {
    gap: 2,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  rowSub: {
    fontSize: 13,
  },
});
