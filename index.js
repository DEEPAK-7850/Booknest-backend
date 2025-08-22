import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;
const URI = process.env.MONGO_URI;

// connect to mongoDB
mongoose.connect(URI)
  .then(() => console.log("✅ Connected to mongoDB"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
