import React from "react";

export function DetailDisplay(props) {
  const recipe = props.recipe;

  const d = recipe.createdAt.slice(0, 10);
  const formattedDate = d.substr(5) + "-" + d.substr(0, 4);

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>Created at: {formattedDate}</p>
      <div
        className="img"
        style={{ backgroundImage: `url(${recipe.image})` }}
      ></div>
      <ul>
        {Object.values(recipe.ingredients).map((ingredient, index) => {
          return (
            <div key={index}>
              <li>{ingredient}</li>
            </div>
          );
        })}
      </ul>
      <p>{recipe.method}</p>
    </div>
  );
}
