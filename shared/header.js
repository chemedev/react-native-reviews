import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const [open, setOpen] = useState(false);

  const pressHandler = () => {
    navigation.openDrawer();
    setOpen(!open);
  };

  return (
    <ImageBackground
      style={styles.header}
      source={require("../assets/game_bg.png")}
    >
      <AntDesign
        name={open ? "menu-unfold" : "menu-fold"}
        size={28}
        onPress={pressHandler}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 412,
    marginLeft: -16,
    height: 92,
    marginTop: -35,
    paddingTop: 40,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    height: "100%",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    top: 40,
    left: 16,
    color: "#333",
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
