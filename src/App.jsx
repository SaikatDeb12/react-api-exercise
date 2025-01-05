import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [excuse, setValue] = useState("");

  return (
    <div>
      <h1>Generate an Excuse</h1>
      <button
        onClick={() => {
          axios
            .get(`https://excuser-three.vercel.app/v1/excuse/party/`)
            .then((event) => {
              setValue(event.data[0].excuse);
              // console.log(event.data[0].excuse);
            });
        }}
      >
        Party
      </button>
      <button
        onClick={() => {
          axios
            .get(`https://excuser-three.vercel.app/v1/excuse/family/`)
            .then((event) => {
              setValue(event.data[0].excuse);
              // console.log(event.data);
            });
        }}
      >
        Family
      </button>
      <button
        onClick={() => {
          axios
            .get(`https://excuser-three.vercel.app/v1/excuse/office/`)
            .then((event) => {
              setValue(event.data[0].excuse);
              // console.log(event.data);
            });
        }}
      >
        Office
      </button>
      <h2>Excuse: {excuse}</h2>
    </div>
  );

  /*
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
  */
}

export default App;
