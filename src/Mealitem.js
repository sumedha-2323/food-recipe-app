import React from 'react'

const Mealitem = (getMeal) => {
    console.log(getMeal.data);
  return (
    <>
      <div className="card">
        <img src={getMeal.data.strMealThumb} alt="" />
        <div className="info">
            <h2>{getMeal.data.strMeal}</h2>
            <p>{getMeal.data.strArea}</p>
        </div>
        <div className='recipe'>
            <h2>Recipe</h2>
            <p>{getMeal.data.strInstructions}</p>
            <img src={getMeal.data.strMealThumb} alt="" />
            <a href={getMeal.data.strYoutube}>Watch video </a>
        </div>
      </div>
    </>
  )
}

export default Mealitem;
