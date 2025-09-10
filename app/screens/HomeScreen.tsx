import { View, Text, StyleSheet } from "react-native";
import UserPanel from "../components/UserPanel";
import Dropdown from "../components/Dropdown";
import CustomButton from "../components/CustomButton";

export default function HomeScreen() {
  const dropdownOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleButtonPress = () => {
    console.log("Button pressed!");
  };

  const handleDropdownSelect = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <View style={styles.container}>
      <UserPanel
        name="Matas Strimaitis"
        title="Student"
        description="First React Native project"
      />

      <Dropdown options={dropdownOptions} onSelect={handleDropdownSelect} />

      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>

      <CustomButton title="Press Me" onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
  },
  text: {
    marginBottom: 16,
    color: "#374151",
  },
});
