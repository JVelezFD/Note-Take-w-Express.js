const express = require("express");
const app = express();
const apiRoute = require("./routes/api/api.js");
const htmlRoute = require("./routes/htmlRoutes/html.js");
const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.listen(PORT, () =>
  console.log(`server running on port: ${PORT}`)
);




