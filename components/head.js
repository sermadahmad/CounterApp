
import React from "react";
import { Text, View } from "react-native";



export default function Head({ data: heading }) {
  return (
    <View style={{ paddingLeft: 70, borderTopWidth:1, paddingTop:10, borderColor:'gray' }}>
      <Text style={{ color: "gray", fontWeight: "600", padding: 5 }}>
        {heading}
      </Text>
    </View>
  );
}
