const express = require("express");
const mongdb = require("./db");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
 mongoose.connect(
   "mongodb+srv://Anshul_ojha:Luhsna@atlascluster.ekt7t1o.mongodb.net/mern_db?retryWrites=true&w=majority",
   { useNewUrlParser: true }
 );
mongdb();

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://tame-tan-betta-cap.cyclic.app"
  );
  res.header(
    "Access-control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api", require("./Routes/CreatUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port ${port}`);
});
/*
https://tame-tan-betta-cap.cyclic.app */
