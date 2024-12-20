import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { CheckBox } from "react-native-btr";

export default function MyCard({ data: { title, desc } }) {
  const [isSelected, setSelection] = useState(true);
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => setSelection(!isSelected)}
    >
      {/* Icon Section */}
      <View style={styles.iconBox}>
        <MaterialCommunityIcons name="volume-high" size={24} color="gray" />
      </View>
      {/* Details Section */}
      <View style={styles.detailsBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {/* Checkbox Section */}
      <View style={styles.checkBox}>
        <CheckBox
          checked={isSelected}
          onPress={() => setSelection(!isSelected)}
          color="#4259A9"
          disabled={false}
          borderRadius={2}
          borderWidth={2}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  iconBox: {
    alignItems: "center",
    justifyContent: "center",

    paddingRight: 20,
  },
  detailsBox: {
    flex: 1, // Allow this section to take available space
    marginHorizontal: 10, // Add some spacing on the sides
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  desc: {
    flexWrap: "wrap", // Ensure text wraps
    fontSize: 14,
  },
  checkBox: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
};
