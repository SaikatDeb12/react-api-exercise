import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // useEffect(() => {}, []);
  const [data, setData] = useState("");
  return (
    <div className="App">
      <button
        onClick={() => {
          axios.get("https://catfact.ninja/fact").then((res) => {
            setData(res.data.fact);
          });
        }}
      >
        Fetch cat facts
      </button>
      <p>{data}</p>
    </div>
  );
}

export default App;
