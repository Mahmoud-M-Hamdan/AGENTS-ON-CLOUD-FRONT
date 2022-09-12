import Card from "../UI/Card";
import MealItem from "./lItem/lItem";
import classes from "./AvailableItems.module.css";
import { useState, useEffect } from "react";

const AvailableMeals = () => {
  // const meals = [{
  //   name: "ggsdg",
  //   id: 5544,
  //   description: "ryreyer yry er",
  //   price: 20,
  // }];
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('http://localhost:3000/tasks');
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: responseData[key]._id,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      console.log(loadedMeals)

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
