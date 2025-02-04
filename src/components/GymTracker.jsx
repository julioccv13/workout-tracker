import { useState, useEffect } from "react";

const workouts = {
  "Push Day": [
    { name: "Flat Barbell Bench Press", sets: 2, reps: "5-8" },
    { name: "Lateral Raise", sets: 3, reps: "10-15" },
    { name: "Flat Bench", sets: 2, reps: "5-10" },
    { name: "Tricep Dips", sets: 2, reps: "5-8" },
    { name: "Tricep Extension", sets: 2, reps: "5-10" },
  ],
  "Leg Day": [
    { name: "Squats", sets: 2, reps: "5-8" },
    { name: "Leg Extension", sets: 3, reps: "5-10" },
    { name: "Leg Curl", sets: 3, reps: "5-10" },
    { name: "Calf Raise", sets: 3, reps: "10-15" },
    { name: "Ab Crunch Machine", sets: 3, reps: "10-15" },
  ],
  "Pull Day": [
    { name: "Lat Pull Down", sets: 2, reps: "5-10" },
    { name: "Machine Row (Pronated Grip)", sets: 2, reps: "5-10" },
    { name: "Close Grip Row", sets: 2, reps: "5-10" },
    { name: "Bicep Curls", sets: 3, reps: "10-15" },
    { name: "Rear Delt Fly", sets: 3, reps: "10-15" },
  ],
  "Upper Body": [
    { name: "Incline Chest Press", sets: 2, reps: "5-10" },
    { name: "Lateral Raise", sets: 3, reps: "10-15" },
    { name: "Lat Pull Down", sets: 2, reps: "5-10" },
    { name: "Bicep Curls", sets: 3, reps: "10-15" },
    { name: "Tricep Extensions", sets: 2, reps: "5-10" },
  ],
  "Lower Body": [
    { name: "Romanian Deadlift", sets: 2, reps: "5-8" },
    { name: "Leg Extension", sets: 3, reps: "5-10" },
    { name: "Leg Curl", sets: 3, reps: "5-10" },
    { name: "Calf Raise", sets: 3, reps: "10-15" },
    { name: "Ab Crunch Machine", sets: 3, reps: "10-15" },
  ],
};

export default function GymTracker() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [log, setLog] = useState(() => {
    const savedLog = localStorage.getItem("gymTrackerLog");
    return savedLog ? JSON.parse(savedLog) : {};
  });

  useEffect(() => {
    localStorage.setItem("gymTrackerLog", JSON.stringify(log));
  }, [log]);

  const handleLogChange = (exercise, index, field, value) => {
    setLog((prev) => ({
      ...prev,
      [selectedDay]: {
        ...prev[selectedDay],
        [exercise]: {
          ...prev[selectedDay]?.[exercise],
          [index]: { ...prev[selectedDay]?.[exercise]?.[index], [field]: value },
        },
      },
    }));
  };

  return (
    <div className="app-container">
      {!selectedDay ? (
        <div>
          <h1>Gym Tracker</h1>
          <img src="icon.png" alt="Gym Tracker Icon" style={{ width: "150px", display: "block", margin: "0 auto" }} />
          {Object.keys(workouts).map((day) => (
            <button key={day} onClick={() => setSelectedDay(day)}>
              {day}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedDay(null)}>⬅ Back</button>
          <h2>{selectedDay}</h2>
          {workouts[selectedDay].map((exercise, i) => (
            <div key={exercise.name} className="card">
              <p className="font-bold">{exercise.name}</p>
              <p>Sets: {exercise.sets}, Reps: {exercise.reps}</p>
              {Array.from({ length: exercise.sets }).map((_, j) => (
                <div key={j}>
                  <input
                    placeholder={`Set ${j + 1} Reps`}
                    value={log[selectedDay]?.[exercise.name]?.[j]?.reps || ""}
                    onChange={(e) => handleLogChange(exercise.name, j, "reps", e.target.value)}
                  />
                  <input
                    placeholder={`Set ${j + 1} Weight`}
                    value={log[selectedDay]?.[exercise.name]?.[j]?.weight || ""}
                    onChange={(e) => handleLogChange(exercise.name, j, "weight", e.target.value)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
