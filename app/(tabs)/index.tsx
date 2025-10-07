import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";

export default function Index() {
  const [message, setMsg] = useState<string>("");
  const [reply, setReply] = useState<string>("");

  const sendMsg = async () => {
    try {
      console.log("started");
      // 172.16.10.221
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      console.log("debug");

      const data: { reply: string } = await response.json();
      setReply(data.reply);
    } catch (error) {
      console.log(error);
      setReply("Error: could not retrieve request. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle1}>InstantRecipes 🥘</Text>
      <Text style={styles.subtitleStyle}>
        Recipes On-Demand to Fit Your Needs
      </Text>
      <Text style={styles.headerStyle1}>
        To get started, begin scanning your ingredients or upload an image
      </Text>
      <Button label="Scan Ingredients" theme="btn-upload" />
      {/* <TextInput
        style={styles.inputContainer}
        multiline
        numberOfLines={4}
        maxLength={80}
        placeholder="Type your message..."
        value={message}
        onChangeText={setMsg}
      /> */}
      <Text style={styles.replyContainer}>{reply}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#121212",
  },
  inputContainer: {
    borderWidth: 1,
    width: 150,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  replyContainer: {
    marginTop: 20,
    fontSize: 16,
  },
  titleStyle1: {
    fontFamily: "Alan Sans",
    fontSize: 36,
    textAlign: "center",
    color: "#93DA97",
  },
  subtitleStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontFamily: "Inter",
    marginTop: 12,
    fontStyle: "italic",
  },
  headerStyle1: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontFamily: "Inter",
    marginTop: 64,
  },
});
