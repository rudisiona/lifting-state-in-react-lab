import React from 'react'

const IngredientList = (props) => {
    return(
        <ul>
        <h1>Ingredients</h1>
        {props.ingredients.map((ingredient, index) => (
          <li
            key={index}
            style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.onAdd(ingredient)}>+</button>
          </li>
        ))}
      </ul>
       )
    }

export default IngredientList