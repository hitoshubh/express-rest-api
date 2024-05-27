const Emp = require("../models/employee");

const getAllEmp = async (req, res) => {
  const data = await Emp.find(req.query);
  res.status(200).json({ data });
};

const getAllEmpTest = async (req, res) => {
  res.status(200).json({ msg: "got data from controller getAllEmpTest" });
};

module.exports = { getAllEmp, getAllEmpTest };
