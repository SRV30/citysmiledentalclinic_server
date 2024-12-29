const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then((data) => console.log(`Mongodb connected with server: `))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

const user = require("./routes/userRoutes");
const logo = require("./routes/logoHome");
const contactRoutes = require("./routes/contactRoutes");
const imagesRoutes = require("./routes/imageRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const service = require("./routes/serviceRoutes");
const homeAbout = require("./routes/homeAboutRoutes");
const homeContact = require("./routes/homeContactRoute");

app.use("/api/cs", user);
app.use("/api/cs", logo);
app.use("/api/cs", contactRoutes);
app.use("/api/cs", imagesRoutes);
app.use("/api/cs", aboutRoutes);
app.use("/api/cs", service);
app.use("/api/cs", homeAbout);
app.use("/api/cs", homeContact);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
