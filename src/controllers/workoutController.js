const workoutServices = require("../services/workoutServices.js");
// In src/controllers/workoutController.js
const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutServices.getAllWorkouts();
    res.send("Get all workouts");
  };
  
  const getOneWorkout = (req, res) => {
    const allWorkouts = workoutServices.getAllWorkouts();
    res.send("Get an existing workout");
  };
  
  const createNewWorkout = (req, res) => {
    const createdWorkout = workoutServices.createNewWorkout();
    res.send("Create a new workout");
  };
  
  const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutServices.updateOneWorkout();
    res.send("Update an existing workout");
  };
  
  const deleteOneWorkout = (req, res) => {
    const deletedWorkout = workoutServices.deleteOneWorkout();
    res.send("Delete an existing workout");
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };