const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Handle 404 - Keep this as the last route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
