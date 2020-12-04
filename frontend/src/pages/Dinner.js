import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryDisplay from "../components/CategoryDisplay";

function Dinner() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/category", { category: "dinner" })
      .then((recipes) => setRecipes(recipes.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CategoryDisplay recipes={recipes} />
    </div>
  );
}

export default Dinner;
