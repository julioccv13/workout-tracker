import React, { useState } from "react";
import WorkoutDay from "./components/WorkoutDay";
import "./styles.css";

const workouts = [
  { day: "Day 1", exercises: [
      { name: "Incline Barbell Bench Press", sets: 2, reps: "5-8" },
      { name: "Lateral Raise", sets: 3, reps: "10-15" },
      { name: "Flat Bench Press", sets: 2, reps: "5-10" },
      { name: "Triceps Dips", sets: 2, reps: "5-8" },
      { name: "Triceps Extension", sets: 2, reps: "5-10" },
  ] },
  { day: "Day 2", exercises: [
      { name: "Squats", sets: 2, reps: "5-8" },
      { name: "Leg Extension", sets: 3, reps: "5-10" },
      { name: "Leg Curl", sets: 3, reps: "5-10" },
      { name: "Calf Raise", sets: 3, reps: "10-15" },
      { name: "Ab Crunch Machine", sets: 3, reps: "10-15" },
  ] },
  { day: "Day 3", exercises: [
    { name: "Lat pulldown", sets: 2, reps: "5-10" },
    { name: "Wide grip row", sets: 3, reps: "5-10" },
    { name: "Close grip row", sets: 2, reps: "5-10" },
    { name: "Bicep curl", sets: 3, reps: "10-15" },
    { name: "Rear delt fly", sets: 3, reps: "10-15" },
] },  { day: "Day 4", exercises: [
    { name: "Flat Barbell Bench Press", sets: 2, reps: "5-8" },
    { name: "Lateral Raise", sets: 3, reps: "10-15" },
    { name: "Lat pull down", sets: 2, reps: "5-10" },
    { name: "Triceps Dips", sets: 3, reps: "10-15" },
    { name: "Bicep curl", sets: 3, reps: "10-15" },
] },  { day: "Day 5", exercises: [
    { name: "Romanian deadlift", sets: 2, reps: "5-8" },
    { name: "Leg Extension", sets: 3, reps: "5-10" },
    { name: "Leg Curl", sets: 3, reps: "5-10" },
    { name: "Calf Raise", sets: 3, reps: "10-15" },
    { name: "Ab Crunch Machine", sets: 3, reps: "10-15" },
] }
];

function App() {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  return (
    <div className="app">
      <h1>Gym Tracker</h1>
      {!selectedWorkout ? (
        <div className="menu">
          {workouts.map((workout, index) => (
            <button key={index} onClick={() => setSelectedWorkout(workout)}>
              {workout.day}
            </button>
          ))}
        </div>
      ) : (
        <WorkoutDay workout={selectedWorkout} goBack={() => setSelectedWorkout(null)} />
      )}
    </div>
  );
}

export default App;
