import { Fragment } from 'react';

import MealsSummary from './ShopSummary';
import AvailableMeals from './AvailableItems';
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
     
    </Fragment>
  );
};

export default Meals;
