import React from "react";
import { Link } from "react-router-dom";

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
                <Link
                  to={{
                    pathname: "/detail/" + recipe._id,
                    state: { ...recipe },
                  }}
                >
                  <button>Go To Recipe</button>
                </Link>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}
