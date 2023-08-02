import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="5" />
      <PetInfo animal="snake" age="25" />
    </div>
  );
}

export default App;
