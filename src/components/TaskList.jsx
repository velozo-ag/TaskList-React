import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from 'react';

function TaskList() {
  //   array.map( (parametro) => (devolucion html))

  const {tasklist, deleteTask} = useContext(TaskContext);

  return (
    <div className="taskList px-14">
      {tasklist.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
