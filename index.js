// In src/index.js
const express = require("express");
// *** ADD ***
const v1WorkoutRouter = require("./src/v1/routes/workoutRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;


// *** ADD ***
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});