const express = require("express");
const {
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
  patchWorkout,
} = require("../controllers/workout");

const router = express.Router();

router.get("/", getWorkouts);
router.get("/:id", getWorkout);
router.post("/", createWorkout);
router.delete("/:id", deleteWorkout);
router.put("/:id", updateWorkout);
router.patch("/:id", patchWorkout);

module.exports = router;
