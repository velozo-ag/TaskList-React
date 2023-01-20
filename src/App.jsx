import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="scroll-smooth h-screen">
      <div className="content flex align-middle justify-center">
        <TaskForm className="font-mono m-0 basis-2/4 " />
        <TaskList className="font-mono m-0 basis-2/4 " />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
