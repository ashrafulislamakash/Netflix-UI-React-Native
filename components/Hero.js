import React from "react";

import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

const Hero = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        resizeMode="contain"
        source={require("../assets/banner.png")}
      />
      <View style={styles.tags}>
        <Text style={styles.menuTag}>1 Season</Text>
        <View style={styles.Separator} />
        <Text style={styles.menuTag}> TV Shows</Text>
      </View>
      <View style={styles.menuHero}>
        <TouchableOpacity style={styles.button}>
          <Feather name="plus" size={26} color="#FFF" />
          <Text style={styles.textButton}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.play}>
          <Ionicons name="ios-play" size={26} />
          <Text style={styles.textButtonPlay}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Feather name="info" size={26} color="#FFF" />
          <Text style={styles.textButton}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    bottom: 8,
  },

  banner: {
    height: 100,
  },

  tags: {
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
  },

  menuTag: {
    color: "#fff",
    padding: 8,
    fontSize: 13,
  },

  separator: {
    width: 3,
    height: 3,
    backgroundColor: "#e8e8e8",
    margin: 6,
    borderRadius: 3,
  },

  menuHero: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    alignItems: "center",
  },

  textButton: {
    color: "#fff",
    fontSize: 13,
    marginTop: 13,
  },

  play: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: 142,
    height: 32,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  textButtonPlay: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 5,
  },
});
