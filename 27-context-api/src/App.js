import { useState } from "react";
import UserContext from "./context/userContext";
import "./App.css";
import User from "./components/User";
import ChangeUser from "./components/ChangeUser";

function App() {
  const [user, setUser] = useState("Andrew");
  return (
    <UserContext.Provider value={{ userName: user, changeUserName: setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  );
}

export default App;
