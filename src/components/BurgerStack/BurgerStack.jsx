import React from 'react'

const BurgerStack = (props) => {
  return(

    <ul>
        <h1>My Burger</h1>
    {props.ingredients.map((ingredient, index) => (
      <li
        key={index}
        style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}

        <button onClick={() => props.onRemove(index)}>X</button>
      </li>
    ))}
  </ul>
  )
}

export default BurgerStack