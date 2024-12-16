import { View, Text, ScrollView, Vibration } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { CheckBox } from "react-native-btr";
import MyCard from "./components/card";
import Head from "./components/head";
import { Button } from "react-native-paper";
import { Audio } from "expo-av";

const App = () => {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/click.mp3") // Add your sound file in the assets folder
    );
    await sound.playAsync();
    // Optional: Unload the sound to free up resources after playing
    sound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.didJustFinish) await sound.unloadAsync();
    });
  };

  const handleVibration = () => {
    // Vibrate for 100ms
    Vibration.vibrate(10);
  };
  
  return (
    <View>
      <Text>Settings</Text>
      <Button mode="contained"  onPress={()=>{
        playSound();
        handleVibration();
      }}>
        Press me
      </Button>
    </View>
  );
};

export default App;

// const controls = [
//   {
//     title: "Turn on sounds",
//     desc: "Play sounds when changing values",
//   },
//   {
//     title: "Turn on vibration",
//     desc: "Vibrate on value changes",
//   },
//   {
//     title: "Use hardware buttons",
//     desc: "Change counter value using volume buttons",
//   },
//   {
//     title: "Tap value to increment",
//     desc: "Increment a counter by tapping the current value",
//   },
// ];

// const display = [
//   {
//     title: "Theme",
//     desc: "Light",
//   },
//   {
//     title: "Keep the screen on",
//     desc: "Keep the screen on while the app is active",
//   },
// ];

// const others = [
//   {
//     title: "Remove all counters",
//     desc: "",
//   },
//   {
//     title: "Export counters",
//     desc: "Export all counters in CSV format",
//   },
//   {
//     title: "Version",
//     desc:"29"
//   },
// ];

// const cont = 'Controls';
// const disp = 'Display';
// const oth = 'Other';

// export default function App() {
//   return (
//     <ScrollView style={{marginTop:50}}>
//       <Head data={cont} />
//       {controls.map((control, index) => (
//         <MyCard key={index} data={control} />
//       ))}
//       <Head data={disp} />
//       {display.map((control, index) => (
//         <MyCard key={index} data={control} />
//       ))}
//       <Head data={oth} />
//       {others.map((control, index) => (
//         <MyCard key={index} data={control} />
//       ))}
//     </ScrollView>
//   );
// }

// <MyCard data={display} />;
// {
//   controls.map((control, index) => <MyCard key={index} data={control} />);
// }
