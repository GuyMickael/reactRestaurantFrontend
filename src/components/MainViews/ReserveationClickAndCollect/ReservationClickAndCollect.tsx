import React from 'react';
import dishes from '../../../mocks/dishes.mock'
import ArticleClickAndCollect from '../../SubComponents/ArticleClickAndCollect/ArticleClickAndCollect';

const ReservationClickAndCollect: React.FC = () => {
  return (
    <div id="Click&Collect" className='w-screen flex flex-wrap justify-center py-10 space-y-5'>
      {dishes.map((dish) => {
        return (
          <div className='sm:w-60 max-sm:w-11/12'>
            <ArticleClickAndCollect dish={dish} key={dish.name+'_key'} />
          </div>
        );
      })}
    </div>
  );
};

export default ReservationClickAndCollect;