import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import { useState } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  const [deleting, setDeleting] = useState(true);

  return (
    <div
      className={
        deleting
          ? "flex flex-row p-3 mt-3 bg-gray-900 bg-opacity-40 border-2 border-gray-900 border-opacity-30 rounded-md transition-all"
          : "flex flex-row p-3 mt-3 bg-gray-900 bg-opacity-40 border-2 border-gray-900 border-opacity-30 rounded-md scale-50 transition-all"
      }
    >
      <div className="basis-11/12">
        <h2 className="text-start font-semibold text-xl mb-1 underline decoration-sky-300">
          {task.title}
        </h2>
        <p className="text-justify text-clip">{task.description}</p>
      </div>
      <a
        className="basis-1/12 bg-red-400 self-center cursor-pointer py-1 pb-2 rounded-lg font-semibold hover:scale-110 active:scale-95 active:bg-red-300 transition-all"
        onClick={() => {
          setDeleting(false);
          deleteTask(task.id);
        }}
      >
        x
      </a>
    </div>
  );
}

export default TaskCard;
