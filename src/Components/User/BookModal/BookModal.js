import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BookModal = ({ isVisible, closeModal, onBookNow }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    date: "",
    time: "",
  });

  const handleBookNow = () => {
    // Perform booking logic here
    onBookNow(bookingDetails);
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
          <Text style={styles.heading}>Book Now</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={(text) =>
              setBookingDetails({ ...bookingDetails, name: text })
            }
            value={bookingDetails.name}
          />
          <TextInput
            style={styles.input}
            placeholder="Date"
            onChangeText={(text) =>
              setBookingDetails({ ...bookingDetails, date: text })
            }
            value={bookingDetails.date}
          />
          <TextInput
            style={styles.input}
            placeholder="Time"
            onChangeText={(text) =>
              setBookingDetails({ ...bookingDetails, time: text })
            }
            value={bookingDetails.time}
          />
          <TouchableOpacity style={styles.button} onPress={handleBookNow}>
            <Text style={styles.buttonText}>Book Now</Text>
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

export default BookModal;
