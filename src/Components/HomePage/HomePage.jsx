import React, { useCallback, useContext, useEffect, useState } from "react";
import "./HomePage.css";
import { myContext } from "../Context/Context";
const HomePage = () => {
  const [Value, setValue] = useState("");
  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchmeal = useCallback(() => {
    fetchHomePageMeals(Value);
  }, [Value, fetchHomePageMeals]);
  return (
    <>
      <div className="home-search">
        <input
          type="text"
          placeholder="search meal"
          value={Value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={fetchmeal}>Search Meal</button>
      </div>
      <div className="home">
        {meals ? (
          meals.map((meal) => (
            <div className="home-meal" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#" />

              <h4 className="name">{meal.strMeal}</h4>
            </div>
          ))
        ) : (
          <h2>Oops No Meal Found... </h2>
        )}
      </div>
    </>
  );
};
export default HomePage;
