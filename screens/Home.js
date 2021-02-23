import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StatusBar,
  Dimensions,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Movies from "../components/Movies";

const item = [
  require("../assets/movie1.jpg"),
  require("../assets/movie2.jpg"),
  require("../assets/movie3.jpg"),
  require("../assets/movie4.jpg"),
  require("../assets/movie5.jpg"),
];
const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.poster}
          source={require("../assets/poster.jpg")}
        >
          <LinearGradient
            style={styles.fullgradient}
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              "rgba(0,0,0,0.5)",
              "rgba(0,0,0,0)",
              "rgba(0,0,0,0)",
              "rgba(0,0,0,1)",
            ]}
          >
            <Header />
            <Hero />
          </LinearGradient>
        </ImageBackground>

        <Movies label="Recommendations" item={item} />
        <Movies label="Top 10" item={item} />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  poster: {
    width: "100%",
    height: (Dimensions.get("window").height * 84) / 100,
  },

  fullgradient: {
    height: "100%",
  },
});
