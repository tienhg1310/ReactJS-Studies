import { useState } from "react";

export default function ToDoList() {
  const [job, setJob] = useState("");
  const [Jobs, setJobs] = useState([]);

  const handleSubmit = () => {
    console.log(job)
    setJobs(prev => [...prev,job]);
    setJob('')
  }
  return (
    <div style={{ padding: 32 }}>
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {Jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}
