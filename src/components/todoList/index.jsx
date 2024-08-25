import TodoItem from "../todoItem/index";
import styles from "./styles.module.css";

function TodoList({ tasks }) {
  return (
    <ul className={styles.container}>
      {tasks.map((task) => {
        return <TodoItem key={task.id} {...task} />;
      })}
    </ul>
  );
}

export default TodoList;
