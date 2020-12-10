import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export function RecipeForm(props) {
  // The state 'size' and function createIngredientArray() create dynamic form (adding more fields for ingredients)
  const [size, setSize] = useState(1);
  function createIngredientArray(length) {
    return Array.from({ length }, (_, k) => k);
  }

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    ingredients: {},
    method: "",
  });
  const [ingredients, setIngredients] = useState({});

  const [editMode, setEditMode] = useState(false);

  const handleChange = (set, field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
    }));
  };

  const handleRemoveIngredient = () => {
    let newIngredients = { ...ingredients };
    const last = Object.keys(newIngredients)[
      Object.keys(newIngredients).length - 1
    ];
    delete newIngredients[last];
    setIngredients({ ...newIngredients });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = {...formData, ingredients: {...ingredients}}
    if (editMode) {
      axios
        .post("http://localhost:8080/update-recipe", recipe)
        .then((res) => console.log(res)) //TODO: REDIRECT
        .catch((err) => console.log(err))
    } else {
      axios
        .post("http://localhost:8080/add-recipe", recipe)
        .then((res) => console.log(res)) // TODO: Redirect somewhere. Do something besides console.log()
        .catch((err) => console.log(err));
    }
  };

  let data = useLocation();

  // If we have an incoming document to open in edit mode, prepopulate the fields
  if (data.state && editMode == false) {
    let unwrap = ({ category, image, ingredients, method, name }) => ({
      category,
      image,
      ingredients,
      method,
      name,
    });

    let activeItem = unwrap({ ...data.state });

    setSize(Object.keys(activeItem.ingredients).length);

    for (var field in activeItem) {
      if (field !== "ingredients") {
        handleChange(setFormData, field, activeItem[field]);
      } else {
        for (var ingredient in activeItem[field]) {
          handleChange(
            setIngredients,
            ingredient,
            activeItem[field][ingredient]
          );
        }
      }
    }

    setFormData((state) => ({
      ...state,
      recipeId: data.state._id,
    }));

    setEditMode(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(event) =>
            handleChange(setFormData, "name", event.target.value)
          }
          value={formData.name || ""}
        />
        <br />
        {createIngredientArray(size).map((number, index) => {
          return (
            <div key={index}>
              <input
                placeholder="Ingredient"
                onChange={(event) => {
                  handleChange(
                    setIngredients,
                    `ingredient${index}`,
                    event.target.value
                  );
                }}
                value={ingredients[`ingredient${index}`] || ""}
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
          value={formData.method || ""}
        />
        <br />
        <input
          placeholder="Category"
          onChange={(event) =>
            handleChange(setFormData, "category", event.target.value)
          }
          value={formData.category || ""}
        />
        <br />
        <input
          placeholder="Image"
          onChange={(event) =>
            handleChange(setFormData, "image", event.target.value)
          }
          value={formData.image || ""}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
