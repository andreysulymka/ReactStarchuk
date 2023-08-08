import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          placeholder="Enter new todo"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
