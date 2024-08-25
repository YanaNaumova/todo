import { useState } from "react";
import styles from "./styles.module.css";

function AddTodoForm({ addTodo }) {
  const [todoName, setTodoName] = useState("");

  function handelSubmit(event) {
    event.preventDefault();
    if (todoName.trim()) {
      addTodo(todoName);
      setTodoName("");
    }
  }

  return (
    <form onSubmit={handelSubmit} className={styles.formContainer}>
      <input
        className={styles.inputTaskStyle}
        type="text"
        value={todoName}
        placeholder="Add new Task"
        onChange={(e) => {
          setTodoName(e.target.value);
        }}
      />
      <button className={styles.btnStyles}>Add Task</button>
    </form>
  );
}

export default AddTodoForm;
