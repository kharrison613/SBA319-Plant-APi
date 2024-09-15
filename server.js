import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import plantRoutes from "./routes/plants.js";
import careTipRoutes from "./routes/careTips.js";

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

app.use(bodyParser.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/users", userRoutes);
app.use("/api/plants", plantRoutes);
app.use("/api/care-tips", careTipRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
