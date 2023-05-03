const express = require("express");
const mongdb = require("./db");
const app = express();
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
app.use("/api", require("./CreatUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.listen(5000, () => {
  console.log(`Example app listening on port ${port}`);
});
/*
https://tame-tan-betta-cap.cyclic.app */
