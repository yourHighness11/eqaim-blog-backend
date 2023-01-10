const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const blogRoute = require("./routes/blogRoute");

dbConnect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", blogRoute);

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
