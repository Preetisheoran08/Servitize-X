import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";


dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(
  cors({
    origin: [
      "http://localhost:5173",           // local frontend
      "https://YOUR-FRONTEND.onrender.com" // render frontend (later)
    ],
    credentials: true,
  })
);

app.use(express.json());



// Test route
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);


app.get("/", (req, res) => {
  res.send("Servitize X Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
