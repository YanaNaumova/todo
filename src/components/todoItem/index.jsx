import { useContext } from "react";
import { TodosContext } from "../../context/TodosContext";
import styles from "./styles.module.css";

function TodoItem({ id, title, completed }) {
  const { removeTodo, completeTodo } = useContext(TodosContext);
  return (
    <li className={styles.container}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => completeTodo(id)}
      />
      <span
        style={{ textDecoration: completed ? "line-through" : "none" }}
        className={styles.titleText}
      >
        {title}
      </span>
      <button className={styles.deleteBtn} onClick={() => removeTodo(id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
