import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 7000;

// GET /me endpoint
app.get("/me", async (req, res) => {
  try {
    // Fetch a random cat fact
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000, // timeout in ms
    });

    const catFact = response.data.fact;

    // Prepare the response object
    const data = {
      status: "success",
      user: {
        email: "owolabismaeel.com", // 👉 Replace this
        name: "Owolabi Ismaeel", // 👉 Replace this
        stack: "Node.js/Express", // 👉 Replace this with your backend stack
      },
      timestamp: new Date().toISOString(), // current UTC time
      fact: catFact, // dynamic fact
    };

    res.status(200).json(data);
  } catch (error) {
    // Handle API failure gracefully
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
      timestamp: new Date().toISOString(),
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
