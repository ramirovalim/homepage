const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = 3000;
const SCRIPTS_DIR = path.join(__dirname, "public", "js", "scripts");

app.use(express.static(path.join(__dirname, "public")));

// Route for serving the dynamic index.html
app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "public", "index.html");
  const scripts = [];

  // Read all .js files from the scripts directory
  fs.readdir(SCRIPTS_DIR, (err, files) => {
    if (err) {
      console.error("Error reading scripts directory:", err);
      return res.status(500).send("Internal Server Error");
    }

    // Filter and add .js files to the scripts array
    files
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        scripts.push(`<script src="js/scripts/${file}"></script>`);
      });

    // Read the index.html and inject the scripts
    fs.readFile(indexPath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading index.html:", err);
        return res.status(500).send("Internal Server Error");
      }

      // Insert the scripts before the closing </body> tag
      const updatedHtml = data.replace(
        "</body>",
        `${scripts.join("\n")}\n</body>`
      );
      res.send(updatedHtml);
    });
  });
});

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
