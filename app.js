const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const { async } = require("rxjs");
const { connect } = require("http2");

const app = express();

const PORT = config.get("port") || 5000;

app.use("/api/post", require("./routes/post.routes"));

const start = async () => {
  try {
    await mongoose.connect(config.get("mongoUri"), {});
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT} ...`)
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
};
start();
