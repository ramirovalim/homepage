const express = require("express");
const app = express();

app.use(
  express.static("/", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "text/javascript");
      }
    },
  })
);

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
