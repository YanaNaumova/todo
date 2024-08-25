import "./App.css";
import TodoList from "./components/todoList";
import AddTodoForm from "./components/addTodoForm";
import { useEffect, useState } from "react";
import { TodosContext } from "./context/TodosContext";
import AllTask from "./components/allTask";

function App() {
  const localStoragetask = JSON.parse(localStorage.getItem("tasks")) || [];
  const localStoragefilter =
    JSON.parse(localStorage.getItem("filter")) || "all";

  const [tasks, setTasks] = useState(localStoragetask);
  const [filter, setFilter] = useState(localStoragefilter);
  const [filteredeTask, setFilterdeTask] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [tasks, filter]);

  useEffect(() => {
    applyFilter();
  }, [tasks, filter]);

  function addTodo(title) {
    const newTask = {
      id: Math.floor(Math.random() * 100000),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function removeTodo(todoId) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== todoId;
      })
    );
  }

  function completeTodo(todoId) {
    setTasks(
      tasks.map((task) => {
        // if (task.id === todoId) {
        //   task.completed = !task.completed;
        //   return task;
        // } else {
        //   return task;
        // }
        return task.id === todoId
          ? { ...task, completed: !task.completed }
          : task;
      })
    );
  }

  function applyFilter() {
    switch (filter) {
      case "active":
        setFilterdeTask(
          tasks.filter((task) => {
            return task.completed === false;
          })
        );
        break;
      case "completed":
        setFilterdeTask(
          tasks.filter((task) => {
            return task.completed === true;
          })
        );
        break;
      default:
        setFilterdeTask(tasks);
    }
  }

  function showAllTask() {
    setFilter("all");
  }

  function showActiveTask() {
    setFilter("active");
  }

  function showCompletedTask() {
    setFilter("completed");
  }

  return (
    <TodosContext.Provider
      value={{
        removeTodo,
        completeTodo,
        showAllTask,
        showActiveTask,
        showCompletedTask,
      }}
    >
      <div className="App">
        <h1>My ToDo List</h1>
        <AddTodoForm addTodo={addTodo} />
        <AllTask />
        <TodoList tasks={filteredeTask} />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
