import { createContext, useState, useEffect } from "react";
import { tasks } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasklist, setTasklist] = useState([]);

  const createTask = (task) => {
    task.id = tasklist.length != 0 ? tasklist[tasklist.length - 1].id + 1 : 0;
    setTasklist([...tasklist, task]);
  };

  const deleteTask = (id) => {
    setTimeout(() => {
      setTasklist(
        tasklist.filter((task) => {
          return task.id != id;
        })
      );
    }, 100);
  };

  useEffect(() => {
    setTasklist(tasks);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasklist,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
