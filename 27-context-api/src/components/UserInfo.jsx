import UserContext from "../context/userContext";
import { useContext } from "react";

function UserInfo() {
  const { user } = useContext(UserContext);
  return <h1>{user}</h1>;
}

export default UserInfo;
