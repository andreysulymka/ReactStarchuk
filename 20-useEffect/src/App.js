import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(null);
  console.log("App rendered");
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return <div className="App"></div>;
}

export default App;
