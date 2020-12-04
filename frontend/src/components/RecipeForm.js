import React, { useState, useEffect } from "react";
import axios from "axios";

function RecipeForm(props) {
  // The state 'size' and function createIngredientArray() create dynamic form (adding more fields for ingredients)
  const [size, setSize] = useState(1);
  function createIngredientArray(length) {
    return Array.from({ length }, (_, k) => k);
  }

  const [formData, setFormData] = useState({});
  const [ingredients, setIngredients] = useState({});

  const handleChange = (set, field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
    }));
    if (field.includes("ingredient")) {
      setFormData((state) => ({
        ...state,
        ingredients: { ...ingredients },
      }));
    }
  };

  const handleRemoveIngredient = () => {
    const newIngredients = { ...ingredients };
    const last = Object.keys(newIngredients)[
      Object.keys(newIngredients).length - 1
    ];
    delete newIngredients[last];
    setFormData((state) => ({
      ...state,
      ingredients: { ...newIngredients },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/add-recipe", formData)
      .then((res) => console.log(res)) // TODO: Redirect somewhere. Do something besides console.log()
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(event) =>
            handleChange(setFormData, "name", event.target.value)
          }
        />
        <br />
        {createIngredientArray(size).map((number, index) => {
          return (
            <div key={index}>
              <input
                placeholder="Ingredient"
                onChange={(event) =>
                  handleChange(
                    setIngredients,
                    `ingredient${index}`,
                    event.target.value
                  )
                }
              />
            </div>
          );
        })}
        <button type="button" onClick={() => setSize(size + 1)}>
          +
        </button>
        <button
          type="button"
          onClick={() => {
            setSize(size - 1);
            handleRemoveIngredient();
          }}
        >
          -
        </button>
        <br />
        <input
          placeholder="Method"
          onChange={(event) =>
            handleChange(setFormData, "method", event.target.value)
          }
        />
        <br />
        <input
          placeholder="Category"
          onChange={(event) =>
            handleChange(setFormData, "category", event.target.value)
          }
        />
        <br />
        <input
          placeholder="Image"
          onChange={(event) =>
            handleChange(setFormData, "image", event.target.value)
          }
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default RecipeForm;
