const workout = require('../database/workout.js');

const getAllWorkouts = () => {
    const allWorkout = workout.getAllWorkouts();
    return allWorkout;
  };
  
  const getOneWorkout = () => {
    return;
  };
  
  const createNewWorkout = () => {
    return;
  };
  
  const updateOneWorkout = () => {
    return;
  };
  
  const deleteOneWorkout = () => {
    return;
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };