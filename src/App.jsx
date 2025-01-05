import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // useEffect(() => {}, []);
  const [data, setData] = useState({});
  const [user, setName] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          axios.get(`https://api.agify.io/?name=${user}`).then((res) => {
            setData(res.data);
          });
        }}
      >
        Fetch details
      </button>
      <h1>Name: {data.name}</h1>
      <h2>Predicted age: {data.age}</h2>
    </div>
  );
}

export default App;
