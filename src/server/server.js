const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for API
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Serve static files from React build (adjust path if needed)
app.use(express.static(path.join(__dirname, "frontend", "dist")));

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

// For any other route, serve the React app index.html (for client-side routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Export the app for testing or further configuration