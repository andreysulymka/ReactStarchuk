import UserContext from "../context/userContext";
import { useContext } from "react";

function UserInfo() {
  const { userName } = useContext(UserContext);
  return <h1>{userName}</h1>;
}

export default UserInfo;
