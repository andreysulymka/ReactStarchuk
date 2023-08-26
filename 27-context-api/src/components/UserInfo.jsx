import UserContext from "../context/userContext";

function UserInfo({ user }) {
  return (
    <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  );
}

export default UserInfo;
