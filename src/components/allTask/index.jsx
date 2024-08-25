import { TodosContext } from "../../context/TodosContext";
import styles from "./styles.module.css";
import { useContext } from "react";

function AllTask() {
  const { showAllTask, showActiveTask, showCompletedTask } =
    useContext(TodosContext);

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={showAllTask}>
        All Task
      </button>
      <button className={styles.btn} onClick={showActiveTask}>
        Activ Task
      </button>
      <button className={styles.btn} onClick={showCompletedTask}>
        Completed Task
      </button>
    </div>
  );
}

export default AllTask;
