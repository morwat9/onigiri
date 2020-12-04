import React from "react";

function CategoryDisplay(props) {
  return (
    <div>
      {
        <ul>
          {props.recipes.map((recipe, index) => {
            const imageStyle = {
              backgroundImage: `url(${recipe.image})`,
            };

            return (
              <li key={index}>
                Name: {recipe.name}
                <br />
                <div className="img" style={imageStyle}></div>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default CategoryDisplay;
