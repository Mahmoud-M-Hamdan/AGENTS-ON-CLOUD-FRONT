import Card from "../UI/Card";
import ItemItem from "./lItem/lItem";
import classes from "./AvailableItems.module.css";
import { useState, useEffect } from "react";

const AvailableItems = () => {
  // const Items = [{
  //   name: "ggsdg",
  //   id: 5544,
  //   description: "ryreyer yry er",
  //   price: 20,
  // }];
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:3040/tasks');
      const responseData = await response.json();

      const loadedItems = [];

      for (const key in responseData) {
        loadedItems.push({
          id: responseData[key]._id,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      console.log(loadedItems)

      setItems(loadedItems);
    };

    fetchItems();
  }, []);
  const ItemsList = Items.map((Item) => (
    <ItemItem
      key={Item.id}
      id={Item.id}
      name={Item.name}
      description={Item.description}
      price={Item.price}
    />
  ));

  return (
    <section className={classes.Items}>
      <Card>
        <ul>{ItemsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableItems;
