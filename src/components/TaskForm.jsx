import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { tasklist, createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      id: tasklist.lenght,
    };
    createTask(newTask);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="p-5">
      <h1 className="font-mono text-4xl my-2 font-semibold capitalize underline bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-sky-300">
        TaskList
      </h1>

      <form
        className=""
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="form">
          <input
            className="font-sans font-medium bg-gray-100 py-1 placeholder:text-gray-400 rounded-md text-gray-900 border-2 border-indigo-300 focus:outline focus:outline-offset-2 focus:outline-2 outline-indigo-400 transition-all focus:scale-105"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
          <textarea
            className="h-24 font-sans font-medium bg-gray-100 py-1 placeholder:text-gray-400 rounded-md text-gray-900 border-2 border-indigo-300 focus:outline focus:outline-offset-2 focus:outline-2 outline-indigo-400 transition-all focus:scale-105"
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            required
          />
          <button className="bg-indigo-600 py-1 rounded-md transition-all hover:bg-indigo-500 active:scale-95">
            Subimt
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
