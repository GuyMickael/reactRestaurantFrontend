import { Dialog } from '@mui/material';
import React from 'react';
import IDishes from '../../../../types/dishes.type';

interface Props {
  dish: IDishes
  isOpened: boolean
}

const MoreInfoPopup: React.FC<Props> = ({dish, isOpened}) => {
  return (
    <Dialog open={isOpened} >
      <div className='w-96 h-96'>
        <div className='w-full h-1/2 bg-gray-300'>
          <img src={dish.image} alt={dish.name} className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-1/2 bg-gray-100'>
          <h1 className='text-2xl font-bold'>{dish.name}</h1>
          <p className='text-sm'>{dish.description}</p>
          <p className='text-sm'>{dish.price}</p>
        </div>
      </div>
    </Dialog>
  );
};

export default MoreInfoPopup;