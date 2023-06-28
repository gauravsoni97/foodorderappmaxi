import React, { useEffect } from "react";
import { MealsListData } from "./MealsListData";
import MealCard from "./MealCard";

const Meals = () => {
  return (
    <div className="mt-16 p-8 ">
      {MealsListData.map((e) => {
        return (
          <>
            <MealCard e={e} />
          </>
        );
      })}
    </div>
  );
};

export default Meals;
