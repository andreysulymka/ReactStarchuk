import { useState } from "react";
import UserContext from "./context/userContext";
import "./App.css";
import User from "./components/User";

function App() {
  const [user, setUser] = useState('Andrew')
  return(
  <UserContext.Provider value={{user, setUser}}>
    <div className="App">
      <User/>
    </div>
      </UserContext.Provider>
  )
}

export default App;
