const dotenv = require("dotenv");
const connectDb = require("./db/connect");
dotenv.config();

const Employee = require("./models/employee");
const EmpJson = require("./emp.json");

const start = async () => {
  try {
    await connectDb(process.env.DB_URI);
    await Employee.create(EmpJson);
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

start();
