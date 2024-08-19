require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 1337;
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");
const app = express();
const connectDb = require("./db/connect");
const cors = require("cors");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(cors());

app.use("/api/workouts", workoutRoutes);
app.use("/api", userRoutes);

const start = async () => {
  try {
    await connectDb(process.env.DB_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
