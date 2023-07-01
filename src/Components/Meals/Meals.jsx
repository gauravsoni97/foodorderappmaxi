import React, { useEffect } from "react";
import { MealsListData } from "./MealsListData";
import MealCard from "./MealCard";

const Meals = () => {
  return (
    <div className="mt-16 p-8 ">
      {MealsListData.map((e, ind) => {
        return (
          <div key={ind}>
            <MealCard
              amount={e.amount}
              name={e.name}
              price={e.price}
              id={e.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
