import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const AdminEditCarModal = ({ isVisible, closeModal, carData, onSave }) => {
  const [editedCarData, setEditedCarData] = useState({
    name: carData.name || "",
    brand: carData.brand || "",
    year: carData.year || "",
    price: carData.price || "",
  });

  const handleSave = () => {
    onSave(editedCarData);
    closeModal();
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.heading}>Edit Car</Text>
          <TextInput
            style={styles.input}
            placeholder="Car Name"
            onChangeText={(text) =>
              setEditedCarData({ ...editedCarData, name: text })
            }
            value={editedCarData.name}
          />
          <TextInput
            style={styles.input}
            placeholder="Brand"
            onChangeText={(text) =>
              setEditedCarData({ ...editedCarData, brand: text })
            }
            value={editedCarData.brand}
          />
          <TextInput
            style={styles.input}
            placeholder="Year"
            onChangeText={(text) =>
              setEditedCarData({ ...editedCarData, year: text })
            }
            value={editedCarData.year}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            onChangeText={(text) =>
              setEditedCarData({ ...editedCarData, price: text })
            }
            value={editedCarData.price}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
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
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: "blue",
    fontSize: 16,
  },
});

export default AdminEditCarModal;
