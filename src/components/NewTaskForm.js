import React, { useState } from "react";

function NewTaskForm( { categories, onTaskFormSubmit }) {
  
  const [textInput, setTextInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  function handleText (e) {
    setTextInput(e.target.value);
    // console.log(textInput);
  }

  function handleSelect (e) {
    setCategoryInput(e.target.value);
    // console.log(categoryInput);
  }

  function onSubmit (e) {
    e.preventDefault();
    const formData = {
      text: textInput,
      category: categoryInput,
    };
    onTaskFormSubmit(formData);
  }
  
  return (
    <form className="new-task-form" onSubmit={(e) => onSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={handleText} value={textInput} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelect} value={categoryInput}>
          {/* render <option> elements for each category here */}
          {categories.map(category => {
            if (category !== "All"){
              return <option key={category}>{category}</option>
            }
          
          })
        }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
