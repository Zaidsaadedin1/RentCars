import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const AdminAddCarModal = () => {
  const [carDetails, setCarDetails] = useState({
    name: "",
    brand: "",
    year: "",
    price: "",
  });

  const handleAddCar = () => {
    // Perform car addition logic here, e.g., send car details to server
    console.log("Adding car:", carDetails);
    // Reset form after adding car
    setCarDetails({ name: "", brand: "", year: "", price: "" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Car</Text>
      <TextInput
        style={styles.input}
        placeholder="Car Name"
        onChangeText={(text) => setCarDetails({ ...carDetails, name: text })}
        value={carDetails.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Brand"
        onChangeText={(text) => setCarDetails({ ...carDetails, brand: text })}
        value={carDetails.brand}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        onChangeText={(text) => setCarDetails({ ...carDetails, year: text })}
        value={carDetails.year}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        onChangeText={(text) => setCarDetails({ ...carDetails, price: text })}
        value={carDetails.price}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddCar}>
        <Text style={styles.buttonText}>Add Car</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default AdminAddCarModal;
