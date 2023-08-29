import UserContext from "../context/userContext";
import { useContext } from "react";
function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);
  return (
    <button
      onClick={() => changeUserName(userName === "Andrew" ? "Alice" : "Andrew")}
    >
      Change User
    </button>
  );
}

export default ChangeUser;
