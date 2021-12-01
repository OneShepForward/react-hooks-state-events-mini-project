import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

const [currentTaskList, taskListSetter] = useState(TASKS);
const [currentCategory, categorySetter] = useState("All");

function handleDelete (task) {
  const updatedTaskList = currentTaskList.filter((item) => {
    return item.text !== task;
  })
  taskListSetter(updatedTaskList);
}

function handleCatSelect (category) {
  categorySetter(category);
}

function handleTaskFormSubmit (formData) {
  console.log("handletaskformsubmit")
  taskListSetter([...currentTaskList, formData])
}

// // Lunn's code
// const displayTasks = () => {
//   return tasks.filter(task => {
//     if (filter === "All") {
//       return true;
//     }
//     else if (filter === task) {
//       return true;
//     }
//   })
// }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCatSelect={handleCatSelect} currentCategory={currentCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={currentTaskList} currentCategory={currentCategory} categories={CATEGORIES} onDelete={handleDelete} />
    </div>
  );
}

export default App;



