import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/logo.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menu}>Series</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menu}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menu}>My List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    width: "100%",
  },

  image: {
    width: 20,
    height: 40,
  },

  menuButton: {
    alignItems: "center",
  },

  menu: {
    fontSize: 18,
    color: "#fff",
    letterSpacing: 0.1,
  },
});
