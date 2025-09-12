import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function FormScreen() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      Alert.alert("Success", `Hello, ${name}!`);
      setName(""); // Clear the form
    } else {
      Alert.alert("Error", "Please enter your name");
    }
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information Form</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Enter your name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Type your name here..."
          placeholderTextColor="#9CA3AF"
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Submit"
            onPress={handleSubmit}
            style={styles.submitButton}
          />
          <CustomButton
            title="Clear"
            onPress={handleClear}
            style={styles.clearButton}
          />
        </View>

        {name ? (
          <Text style={styles.preview}>Preview: Hello, {name}!</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 32,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: 320,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#10B981",
  },
  clearButton: {
    flex: 1,
    backgroundColor: "#EF4444",
  },
  preview: {
    marginTop: 20,
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    fontStyle: "italic",
  },
});
