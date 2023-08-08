import "./Post.css";

function Post({ userId, title, body, id }) {
  return (
    <div className="post">
      <small>{id}</small>
      <h1>{title}</h1>
      <p>{body}</p>
      <h3>userId: {userId}</h3>
    </div>
  );
}

export default Post;
