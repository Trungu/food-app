// required dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const OpenAI = require("openai");

// set up the server
dotenv.config();
const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// start the openAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST route for chat requests
app.post("/api/chat", async (req, res) => {
  try {
    console.log("Received request:", req.body);
    const { message } = req.body; // message sent from Expo app

    // send req
    const response = await client.responses.create({
      model: "gpt-4.1-nano",
      input: message,
    });

    // send the response back
    console.log("debug 2");
    res.json({ reply: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// run the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
