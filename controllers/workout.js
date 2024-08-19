const Workout = require("../models/workout");

const getWorkouts = async (req, res) => {
  try {
    const data = await Workout.find(req.query);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Failed to get workouts." });
  }
};

const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Workout.findById(id);

    if (!data) {
      return res.status(404).json({ error: "Workout not found." });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Failed to get workout." });
  }
};

const createWorkout = async (req, res) => {
  try {
    const { title, reps, load } = req.body;
    if (!title || !reps || !load) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: "Failed to create workout." });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const data = await Workout.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res.status(404).json({ error: "Workout not found." });
    }
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Failed to update workout." });
  }
};

const patchWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    if (!Object.keys(updates).length) {
      return res.status(400).json({ error: "No updates provided." });
    }

    const data = await Workout.findByIdAndUpdate(
      id,
      { $set: updates },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!data) {
      return res.status(404).json({ error: "Workout not found." });
    }
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "Failed to update workout." });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Workout.findByIdAndDelete(id);

    if (!data) {
      return res.status(404).json({ error: "Workout not found." });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Workout deleted successfully." });
  }
};

module.exports = {
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
  patchWorkout,
};
