import React, { useState } from "react";

function ExerciseLogger({ exercise }) {
  const [log, setLog] = useState(Array(exercise.sets).fill(""));

  const handleLogChange = (index, value) => {
    const newLog = [...log];
    newLog[index] = value;
    setLog(newLog);
  };

  return (
    <div className="exercise">
      <h3>{exercise.name}</h3>
      {log.map((entry, index) => (
        <div key={index}>
          <label>Set {index + 1}: </label>
          <input
            type="text"
            placeholder={`Weight (kg) & Reps`}
            value={entry}
            onChange={(e) => handleLogChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default ExerciseLogger;
