import { Fragment } from 'react';

import ItemsSummary from './ShopSummary';
import AvailableItems from './AvailableItems';
const Items = () => {
  return (
    <Fragment>
      <ItemsSummary />
      <AvailableItems />
     
    </Fragment>
  );
};

export default Items;
