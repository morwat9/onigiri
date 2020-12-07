import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryDisplay } from "../components/CategoryDisplay";
import { DetailDisplay } from "../components/DetailDisplay";

export function Breakfast() {
  const [recipes, setRecipes] = useState([]);
  const [detailView, setDetailView] = useState(null);
  useEffect(() => {
    if (recipes.length === 0) {
      axios
        .post("http://localhost:8080/category", { category: "breakfast" })
        .then((recipes) => setRecipes(recipes.data))
        .catch((err) => console.log(err));
    }
  }, [recipes]);

  if (detailView) {
    return (
      <DetailDisplay
        recipe={recipes.find((obj) => {
          return obj._id === detailView;
        })}
      />
    );
  }
  if (!detailView) {
    return <CategoryDisplay recipes={recipes} setDetailView={setDetailView} />;
  }
}
