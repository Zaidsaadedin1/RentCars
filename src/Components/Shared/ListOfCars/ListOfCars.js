import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Card from "./Card"; // Assuming Card component is in a separate file

const CarList = ({ carData }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {carData.map((car, index) => (
        <Card
          key={index}
          carImage={car.image}
          carText={`Car Name: ${car.name}\nPrice: ${car.price}`}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default CarList;
