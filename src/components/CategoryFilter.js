import React from "react";

function CategoryFilter( { categories, onCatSelect, setFilter, currentCategory }) {

function handleSelect(e) {
onCatSelect(e.target.innerText)
}

function renderCategoryButtons() { 
  return categories.map(category => {
    if (currentCategory === category){
      return <button key={category} onClick={handleSelect} className="selected">{category}</button>
    } else {
    return <button key={category} onClick={handleSelect} className="">{category}</button>
    }
  })

}

// Lunn's code
// const handleClick = () => {

// }

// console.log(categories)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderCategoryButtons()}
    </div>
  );
}

export default CategoryFilter;
