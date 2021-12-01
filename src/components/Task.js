import React from "react";

function Task( { text, category, onDelete } ) {
  
  
// const [isDeleted, deleteSetter] = useState(false);

// function handeDelete(e) {
//   console.log(e.target)
//   e.target.removeParent()
// }

const itemToDelete = {
  text: {text},
  category: {category},
}

// console.log(itemToDelete.text.text)

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      {/* ugh is there a better way to do this? .text.text is so confusing */}
      <button className="delete" onClick={() => onDelete(itemToDelete.text.text)}>X</button>
    </div>
  );
}

export default Task;
