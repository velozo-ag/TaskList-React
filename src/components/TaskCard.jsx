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
          ? "flex snap-center flex-row p-4 my-3 bg-gray-800 bg-opacity-30 border-2 border-gray-900 border-opacity-30 rounded-md shadow-md shadow-black transition-all"
          : "flex snap-center flex-row p-4 my-3 bg-gray-800 bg-opacity-30 border-2 border-gray-900 border-opacity-30 rounded-md shadow-md shadow-black scale-50 transition-all"
      }
    >
      <div className="basis-11/12">
        <h2 className="text-start font-semibold text-xl mb-1 underline decoration-sky-300">
          {task.title}
        </h2>
        <p className="text-justify text-clip">{task.description}</p>
      </div>
      <div className="flex justify-end p-1 basis-1/12">
        <a
          className="shadow-md flex align-middle shadow-black bg-red-400 self-center cursor-pointer py-1 px-3 rounded-lg font-semibold hover:scale-110 active:scale-95 active:bg-red-300 transition-all"
          onClick={() => {
            setDeleting(false);
            deleteTask(task.id);
          }}
        >
          x
        </a>
      </div>
    </div>
  );
}

export default TaskCard;
