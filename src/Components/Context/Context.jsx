import axios from "axios";
import React, { createContext, useCallback, useState } from "react";
export const myContext = createContext();
const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [randomMeal, setrandomMeal] = useState([]);

  const fetchHomePageMeals = useCallback((Value) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Value}`)
      .then((resp) => {
        console.log(resp.data.meals);
        setMeals(resp.data.meals);
      });
  }, []);

  return (
    <myContext.Provider value={{ fetchHomePageMeals, meals }}>
      {children}
    </myContext.Provider>
  );
};
export default AppContext;
