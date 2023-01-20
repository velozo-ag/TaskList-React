import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="container">
      <TaskForm className="font-mono" />
      <TaskList className="font-mono" />
    </div>
  );
};

export default App;
