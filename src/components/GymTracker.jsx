import { useState } from "react";

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
  const [log, setLog] = useState({});

  const handleLogChange = (exercise, index, field, value) => {
    setLog((prev) => ({
      ...prev,
      [exercise]: {
        ...prev[exercise],
        [index]: { ...prev[exercise]?.[index], [field]: value },
      },
    }));
  };

  return (
    <div className="p-4">
      {!selectedDay ? (
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(workouts).map((day) => (
            <button key={day} className="p-4 bg-blue-500 text-white rounded-md" onClick={() => setSelectedDay(day)}>
              {day}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedDay(null)} className="mb-4 p-2 bg-gray-500 text-white rounded-md">
            Back
          </button>
          <h2 className="text-xl font-bold mt-4">{selectedDay}</h2>
          {workouts[selectedDay].map((exercise, i) => (
            <div key={exercise.name} className="p-4 bg-gray-200 rounded-md mt-2">
              <p className="font-bold">{exercise.name}</p>
              <p className="text-sm text-gray-500">Sets: {exercise.sets}, Reps: {exercise.reps}</p>
              {Array.from({ length: exercise.sets }).map((_, j) => (
                <div key={j} className="flex gap-2 mt-2">
                  <input
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder={`Set ${j + 1} Reps`}
                    value={log[exercise.name]?.[j]?.reps || ""}
                    onChange={(e) => handleLogChange(exercise.name, j, "reps", e.target.value)}
                  />
                  <input
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder={`Set ${j + 1} Weight`}
                    value={log[exercise.name]?.[j]?.weight || ""}
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
