import React from "react";
import { DetailDisplay } from "../components/DetailDisplay";
import { useLocation } from 'react-router-dom'

export function DetailRecipe() {
    const data = useLocation()
  return (
    <div>
      <h1>Detail Recipe</h1>
      <DetailDisplay recipe={data.state}/>
    </div>
  );
}
