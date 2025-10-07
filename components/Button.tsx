import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, StyleSheet, Text, View } from "react-native";

type buttonProps = {
  label: string;
  theme: string;
};

export default function Button({ label, theme }: buttonProps) {
  if (theme == "btn-upload") {
    return (
      <View style={styles.buttonContainerUpload}>
        <Pressable
          style={styles.button}
          onPress={() => alert("Button Pressed!")}
        >
          <Entypo
            name="camera"
            size={24}
            color="black"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainerUpload: {
    width: 180,
    height: 68,
    marginHorizontal: 20,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderColor: "#93DA97",
    borderWidth: 3,
    borderRadius: 14,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  buttonIcon: {
    marginRight: 6,
  },
  buttonLabel: {
    color: "black",
    fontSize: 16,
  },
});
