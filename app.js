require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 1337;
const workoutRoutes = require("./routes/workout");
const app = express();
const connectDb = require("./db/connect");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

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
