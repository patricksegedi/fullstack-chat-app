import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState<string>("Loading...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((response) => response.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Backend connection failed"));
  }, []);

  return (
    <div>
      <h1>Chat Application</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}

export default App;