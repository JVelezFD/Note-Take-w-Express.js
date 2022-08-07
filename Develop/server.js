const express = require("express");
const app = express();
require("./routes/api.routes")(app);
require("./routes/html.routes")(app);
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.listen(PORT, () =>
  console.log(`Express server currently running on port: ${PORT}`)
);




