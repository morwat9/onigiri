import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Dinner(){
    const [recipes, setRecipes] = useState([]) 
    useEffect(() => {
        axios.post('http://localhost:8080/category', { category: "dinner"})
            .then((recipes) => setRecipes(recipes.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <ul>
            {
            recipes.map((recipe, index) => {
                const imageStyle = {
                    backgroundImage: `url(${recipe.image})`
                }
                
                return (<li key={index}>
                    Name: {recipe.name}
                    <br/>
                    <div className="img" style={imageStyle}></div>
                </li>)
            })}
            </ul>
        </div>
    )
}

export default Dinner