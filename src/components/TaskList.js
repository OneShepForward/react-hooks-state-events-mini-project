import React from "react";
import Task from "./Task";

function TaskList({ tasks, categories, onDelete, currentCategory }) {


function renderTasks() {
    const filteredTasks = tasks.filter(task => {
    if (currentCategory === "All") {
      return task;
    } else {
      return task.category === currentCategory;
    }
  })
  
  return filteredTasks.map(task => {
    return (<Task 
              text={task.text} 
              category={task.category} 
              key={task.text} 
              onDelete={onDelete}
              className="task" 
            />
    );
  })

}
let taskClassNames = "tasks task"

// console.log(tasks);
  return (
    <>
    <div className={taskClassNames}>
      {/* display a list of tasks using Task component */}
      {renderTasks()}
    </div>
    </>
  );
}

export default TaskList;
