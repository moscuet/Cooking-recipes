import React from 'react'
import './recipe.css'
export default function Recipe({recipe}) {
    return (
        <div className="recipe-box">
            <div className="image-div">
                <img src={recipe.image[0]} alt='recipie pic'/>
            </div>
            <p>{recipe.name}</p>
        </div>
    )
}
