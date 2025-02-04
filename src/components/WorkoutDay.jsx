import React from "react";
import ExerciseLogger from "./ExerciseLogger";

function WorkoutDay({ workout, goBack }) {
  return (
    <div className="workout">
      <button onClick={goBack}>⬅ Back</button>
      <h2>{workout.day}</h2>
      {workout.exercises.map((exercise, index) => (
        <ExerciseLogger key={index} exercise={exercise} />
      ))}
    </div>
  );
}

export default WorkoutDay;
