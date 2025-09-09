import { Text, View, Pressable, StyleSheet } from "react-native";
import "../global.css";

export default function Index() {
  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Matas Strimaitis</Text>
        <Text style={styles.panelSubtitle}>Student</Text>
      </View>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
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
  panel: {
    backgroundColor: "#F3F4F6",
    padding: 24,
    borderRadius: 8,
    marginBottom: 24,
    width: 320,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  panelTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 4,
  },
  panelSubtitle: {
    fontSize: 18,
    color: "#6B7280",
    textAlign: "center",
  },
  text: {
    marginBottom: 16,
    color: "#374151",
  },
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
  tailwindPanel: {
    backgroundColor: "#64748b", // bg-slate-500
    borderRadius: 12, // rounded-xl
    padding: 16,
    marginTop: 16,
    alignItems: "center",
  },
  tailwindText: {
    fontSize: 18, // text-lg
    fontWeight: "500", // font-medium
    color: "#111827",
  },
});
