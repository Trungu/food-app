import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [message, setMsg] = useState<string>("");
  const [reply, setReply] = useState<string>("");

  const sendMsg = async () => {
    try {
      const response = await fetch("http://10.247.64.28:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data: { reply: string } = await response.json();
      setReply(data.reply);
    } catch (error) {
      console.log(error);
      setReply("Error: could not retrieve request. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        multiline
        numberOfLines={4}
        maxLength={80}
        placeholder="Type your message..."
        value={message}
        onChangeText={setMsg}
      />
      <Button title="Send" onPress={sendMsg} />
      <Text style={styles.replyContainer}>{reply}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    borderWidth: 1,
    width: 150,
    padding: 10,
    marginBottom: 10,
  },
  replyContainer: {
    marginTop: 20,
    fontSize: 16,
  },
});
