import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryDisplay from "../components/CategoryDisplay";

function Lunch() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/category", { category: "lunch" })
      .then((recipes) => setRecipes(recipes.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CategoryDisplay recipes={recipes} />
    </div>
  );
}

export default Lunch;
