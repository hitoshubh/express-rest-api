const express = require("express");
const router = express.Router();

const { getAllEmp, getAllEmpTest } = require("../controllers/employee");

router.route("/").get(getAllEmp);
router.route("/test").get(getAllEmpTest);

module.exports = router;
