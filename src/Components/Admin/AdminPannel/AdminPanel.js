import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AdminPanel = ({ navigation }) => {
  const handleManageUsers = () => {
    // Navigate to the manage users page
    navigation.navigate("ManageUsers");
  };

  const handleManageContent = () => {
    // Navigate to the manage content page
    navigation.navigate("ManageContent");
  };

  const handleAnalytics = () => {
    // Navigate to the analytics page
    navigation.navigate("Analytics");
  };

  const handleSettings = () => {
    // Navigate to the settings page
    navigation.navigate("Settings");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Admin Panel</Text>
      <TouchableOpacity style={styles.button} onPress={handleManageUsers}>
        <Text style={styles.buttonText}>Manage Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleManageContent}>
        <Text style={styles.buttonText}>Manage Content</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAnalytics}>
        <Text style={styles.buttonText}>Analytics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSettings}>
        <Text style={styles.buttonText}>Settings</Text>
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
  button: {
    width: "100%",
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default AdminPanel;
