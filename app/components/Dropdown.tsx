import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
}

export default function Dropdown({
  options,
  placeholder = "Select an option",
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <View style={styles.dropdownContainer}>
      <Pressable style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.dropdownButtonText}>{selectedOption}</Text>
        <Text style={styles.arrow}>{isOpen ? "▲" : "▼"}</Text>
      </Pressable>

      {isOpen && (
        <View style={styles.dropdownMenu}>
          {options.map((option, index) => (
            <Pressable
              key={index}
              style={styles.dropdownItem}
              onPress={() => selectOption(option)}
            >
              <Text style={styles.dropdownItemText}>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    width: 320,
    marginBottom: 24,
  },
  dropdownButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownButtonText: {
    fontSize: 16,
    color: "#374151",
  },
  arrow: {
    fontSize: 16,
    color: "#6B7280",
  },
  dropdownMenu: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#374151",
  },
});
