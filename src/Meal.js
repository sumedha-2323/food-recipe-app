import React, { useState } from 'react';
import Mealitem from './Mealitem';

const Meal = () => {

    const [search, setSearch] = useState('');

    const [meal, setMeal] = useState();

    const searchMeal = (evt) =>{
        if(evt.key == "Enter") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then (data=> {
                setMeal(data.meals);
            })
        }
    }
  return (
    <div className='main'>
        <div className="heading">
            <h1>Search Your Food Recipe</h1>

        </div>

        <div className="searchBox">
            <input type="search" className='search-bar' placeholder='Enter food name' onChange={(e)=> setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
        </div>

        <div className='container'>
            {
                (meal == null) ? <p className='notFound'>Not Found</p> : meal.map((res) => {
                    return (
                        <Mealitem data={res}/>

                    )
                })
            }
           

        </div>
        
    </div>
  )
}

export default Meal;
