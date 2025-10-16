import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Health endpoint
app.get("/", (req, res) => {
  res.send("Server is running. Go to /me for your profile info.");
});

// GET /me endpoint
app.get("/me", async (req, res) => {
  try {
    // Allow bypassing the external API for diagnostics or if the environment requires it
    const skipExternal =
      req.query?.mock === "1" ||
      req.query?.mock === "true" ||
      process.env.SKIP_EXTERNAL_API === "true";
    let catFact = null;

    if (!skipExternal) {
      // Fetch a random cat fact
      const response = await axios.get("https://catfact.ninja/fact", {
        timeout: 5000, // timeout in ms
      });

      catFact = response?.data?.fact || null;
    } else {
      catFact =
        "(mock) Cats nap a lot — using mock response because external requests are disabled.";
    }

    // Prepare the response object
    const data = {
      status: "success",
      user: {
        email: "owolabismaeel@gmail.com",
        name: "Owolabi Ismaeel",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.status(200).json(data);
  } catch (error) {
    // Log the original error for diagnostics
    console.error("/me handler error:", {
      message: error?.message,
      code: error?.code,
      responseStatus: error?.response?.status,
      responseData: error?.response?.data,
    });

    // Return a helpful error message
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
      timestamp: new Date().toISOString(),
    });
  }
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// Start server
const server = app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`\nReceived ${signal}. Closing server...`);
  server.close((err) => {
    if (err) {
      console.error("Error during server close:", err);
      process.exit(1);
    }
    console.log("Server closed. Exiting.");
    process.exit(0);
  });
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
