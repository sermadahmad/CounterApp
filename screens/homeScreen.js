import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");
export default function HomeScreen() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.mainBox}>
      <View style={styles.countBox}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={styles.btnsBox}>
        <View style={styles.incBtn}>
          <TouchableOpacity style={styles.btn} onPress={increment}>
            <Text style={styles.incText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.decResBtn}>
          <View style={styles.decBtn}>
            <TouchableOpacity style={styles.btn} onPress={decrement}>
              <Text style={styles.decText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resBtn}>
            <TouchableOpacity style={styles.btn} onPress={reset}>
              <Text style={styles.resText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  incText: {
    fontSize: 70,
    fontWeight: "bold",
    textAlign: "center",
  },
  decText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  resText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  countText: {
    fontSize: 150,
    fontWeight: "bold",
    padding: 10,
  },
  decResBtn: {
    flexDirection: "row",
  },

  mainBox: {
    width: width,
    height: height,
  },
  countBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  btnsBox: {
    padding: 10,
    backgroundColor: "lightblue",
  },
  incBtn: {
    backgroundColor: "lightgreen",
    margin: 10,
    padding: 10,
    borderWidth: 3,
    borderRadius: 50,
  },
  decBtn: {
    flex: 1,
    backgroundColor: "lightgreen",
    margin: 10,
    padding: 10,
    borderRadius: 50,
    borderWidth: 3,

  },
  resBtn: {
    flex: 1,
    backgroundColor: "lightgreen",
    borderWidth: 3,
    margin: 10,
    padding: 10,
    borderRadius: 50,
  },
});
