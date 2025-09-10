import { View, Text, StyleSheet } from "react-native";

interface UserPanelProps {
  name: string;
  title: string;
  description?: string;
}

export default function UserPanel({
  name,
  title,
  description,
}: UserPanelProps) {
  return (
    <View style={styles.panel}>
      <Text style={styles.panelTitle}>{name}</Text>
      <Text style={styles.panelSubtitle}>{title}</Text>
      {description && <Text style={styles.panelSubtitle}>{description}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
