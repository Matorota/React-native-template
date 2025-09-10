import { Text, Pressable, StyleSheet } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
}

export default function CustomButton({
  title,
  onPress,
  style,
}: CustomButtonProps) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3B82F6",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
});
