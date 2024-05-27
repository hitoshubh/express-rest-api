const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./db/connect");
dotenv.config();

const PORT = process.env.PORT;

const emp_routes = require("./routes/employee");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/employees", emp_routes);

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
