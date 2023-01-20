import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  //   array.map( (parametro) => (devolucion html))

  const { tasklist, deleteTask } = useContext(TaskContext);

  return (
    <div className="flex justify-center mt-6">
      <div className="taskList px-7 self-center h-4/6 w-11/12 overflow-y-auto shadow-lg shadow-black bg-gray-900 bg-opacity-40 rounded-lg snap-proximity snap-y scroll-auto scroll-pb-6">
        {tasklist.length === 0 ? (
          <div className="grid content-center h-80">
            <h1 className="text-lg font-semibold">Add new task</h1>
          </div>
        ) : (
          tasklist.map((task) => <TaskCard task={task} key={task.id} />)
        )}
      </div>
    </div>
  );
}

export default TaskList;
