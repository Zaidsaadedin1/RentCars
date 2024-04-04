import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ carImage, carText }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: carImage }} style={styles.image} />
      <Text style={styles.text}>{carText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
});

export default Card;
