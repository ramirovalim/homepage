const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from the '' directory
app.use(express.static("./public", { index: "index.html" }));

// Handle 404 - Keep this as the last route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "", "404.html"));
});

app.get("../*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
