import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export function DetailDisplay(props) {
  const recipe = props.recipe;

  const d = recipe.createdAt.slice(0, 10);
  const formattedDate = d.substr(5) + "-" + d.substr(0, 4);

  const deactivateRecipe = (recipeId) => {
    console.log(recipeId)
    axios
      .post("http://localhost:8080/deactivate", { recipeId: recipeId })
      .then((res) => {
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err); 
      });
  };

  const [redirect, setRedirect] = useState(false);

  const redirectToCategory = (category) => {
    return (
      <div>
        <Redirect to={"/" + category} />
      </div>
    );
  };

  return (
    <div>
      {redirect === false ? null : redirectToCategory(recipe.category)}
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
      <Link
        to={{
          pathname: "/edit-recipe/" + recipe._id,
          state: { ...recipe },
        }}
      >
        <button>Edit Recipe</button>
      </Link>
      <button
        onClick={() => {
          if (confirm("Delete this recipe?")) {
            deactivateRecipe(recipe._id);
          }
        }}
      >
        Delete Recipe
      </button>
    </div>
  );
}
