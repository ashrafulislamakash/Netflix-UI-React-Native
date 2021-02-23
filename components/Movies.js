import React from "react";

import {
  Dimensions,
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

const Movies = ({ label, item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <ScrollView style={styles.movieScroll} horizontal>
        {item.map((movie, item) => {
          return (
            <View style={styles.movieCard} key={String(item)}>
              <Image
                style={styles.moviePoster}
                resizeMode="cover"
                source={movie}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  label: {
    color: "#fff",
    fontSize: 16,
    margin: 10,
  },

  movieScroll: {
    paddingLeft: 10,
  },

  movieCard: {
    paddingRight: 9,
  },

  moviePoster: {
    width: (Dimensions.get("window").width * 28) / 100,
    height: 150,
  },
});
