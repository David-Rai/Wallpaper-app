import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function setting() {
  return (
    <View>

      {/* Theme selection */}
      <View>
        <Text>Select Theme</Text>
        <TouchableOpacity>
          <Text>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Automatic</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({});
