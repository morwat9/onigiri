import React from "react";

export function CategoryDisplay(props) {
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
                <button onClick={() => props.setDetailView(recipe._id)}>
                  Go To Recipe
                </button>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}
