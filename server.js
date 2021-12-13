// const app = require("./app");

// // ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
// const PORT = process.env.PORT || 5005;

// app.listen(PORT, () => {
//   console.log(`Server listening on port http://localhost:${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true
}));

// Routes
app.use("/user", require("./routes/userRouter"));
app.use("/api", require("./routes/categoryRouter"));
app.use("/api", require("./routes/upload"));
app.use("/api", require("./routes/productRouter"));

// connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
  // useCreateIndex: true,
  // useFindAndModify: false,
  // useNewUrlParser: true,
  // useUnifiedTopology: true
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
})